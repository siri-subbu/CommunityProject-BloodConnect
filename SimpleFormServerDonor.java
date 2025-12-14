import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.*;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.sql.*;
import java.security.MessageDigest;
import java.util.*;

import javax.mail.*;
import javax.mail.internet.*;

public class SimpleFormServerDonor {

    // ===== DATABASE CONFIG =====
    static final String DB_URL  = "jdbc:mysql://localhost:3306/mydb";
    static final String DB_USER = "root";
    static final String DB_PASS = "23331A0581";

    // ===== EMAIL CONFIG =====
    static final String EMAIL_USER = "bloodcnct@gmail.com";
    static final String EMAIL_PASS = "hpyzhxykspmzzmzv"; // 16-char app password

    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        server.createContext("/register", new RegisterHandler());
        server.createContext("/verify", new VerifyHandler());
        server.setExecutor(null);
        server.start();
        System.out.println("Server running at http://localhost:8080");
    }

    // ================= REGISTER =================
    static class RegisterHandler implements HttpHandler {
        public void handle(HttpExchange ex) throws IOException {

            if (!ex.getRequestMethod().equalsIgnoreCase("POST")) {
                send(ex, 405, "POST only");
                return;
            }

            String body;
try (BufferedReader br = new BufferedReader(
        new InputStreamReader(ex.getRequestBody(), StandardCharsets.UTF_8))) {

    body = br.lines().reduce("", (a, b) -> a + b);
}


            Map<String,String> p = parse(body);

            if (!p.get("password").equals(p.get("cpassword"))) {
                send(ex, 200, "Passwords mismatch");
                return;
            }


            try {
                String token = UUID.randomUUID().toString();
                String hash  = hash(p.get("password"));

                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection c = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);

                PreparedStatement ps = c.prepareStatement(
                    "INSERT INTO donors_pending " +
                    "(name,gender,age,phone,district,mandal,blood_group,email,password_hash,token) " +
                    "VALUES (?,?,?,?,?,?,?,?,?,?)"
                );

                ps.setString(1, p.get("name"));
                ps.setString(2, p.get("gender"));
                ps.setInt(3, Integer.parseInt(p.get("age")));
                ps.setString(4, p.get("phone"));
                ps.setString(5, p.get("district"));
                ps.setString(6, p.get("mandal"));
                ps.setString(7, p.get("group"));
                ps.setString(8, p.get("email"));
                ps.setString(9, hash);
                ps.setString(10, token);

                ps.executeUpdate();
                ps.close();
                c.close();

                sendMail(p.get("email"), token);
                send(ex, 200, "Verification mail sent");

            } catch (Exception e) {
                e.printStackTrace();
                send(ex, 500, e.getMessage());
            }
        }
    }

    // ================= VERIFY =================
    static class VerifyHandler implements HttpHandler {
        public void handle(HttpExchange ex) throws IOException {

            String q = ex.getRequestURI().getQuery();
            Map<String,String> p = parse(q);
            String token = p.get("token");

            if (token == null) {
                send(ex, 400, "Invalid link");
                return;
            }

            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection c = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);

                PreparedStatement ps = c.prepareStatement(
                        "SELECT * FROM donors_pending WHERE token=?");
                ps.setString(1, token);
                ResultSet rs = ps.executeQuery();

                if (!rs.next()) {
                    send(ex, 400, "Expired token");
                    return;
                }

                PreparedStatement ins = c.prepareStatement(
                    "INSERT INTO donors " +
                    "(name,gender,age,phone,district,mandal,blood_group,email,password_hash) " +
                    "VALUES (?,?,?,?,?,?,?,?,?)"
                );

                ins.setString(1, rs.getString("name"));
                ins.setString(2, rs.getString("gender"));
                ins.setInt   (3, rs.getInt("age"));        
                ins.setString(4, rs.getString("phone"));
                ins.setString(5, rs.getString("district"));
                ins.setString(6, rs.getString("mandal"));
                ins.setString(7, rs.getString("blood_group"));
                ins.setString(8, rs.getString("email"));
                ins.setString(9, rs.getString("password_hash"));

                ins.executeUpdate();

                PreparedStatement del = c.prepareStatement(
                        "DELETE FROM donors_pending WHERE token=?");
                del.setString(1, token);
                del.executeUpdate();

                c.close();
                send(ex, 200, "Registration verified");

            } catch (Exception e) {
                e.printStackTrace();
                send(ex, 500, e.getMessage());
            }
        }
    }

    // ================= MAIL =================
    static void sendMail(String to, String token) throws Exception {

        Properties p = new Properties();
        p.put("mail.smtp.auth", "true");
        p.put("mail.smtp.starttls.enable", "true");
        p.put("mail.smtp.host", "smtp.gmail.com");
        p.put("mail.smtp.port", "587");

        Session s = Session.getInstance(p, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(EMAIL_USER, EMAIL_PASS);
            }
        });

        Message m = new MimeMessage(s);
        m.setFrom(new InternetAddress(EMAIL_USER));
        m.setRecipients(Message.RecipientType.TO,
                InternetAddress.parse(to));
        m.setSubject("Verify Registration");
        m.setText(
            "Click to verify:\n" +
            "http://localhost:8080/verify?token=" + token
        );

        Transport.send(m);
    }

    // ================= HELPERS =================
    static Map<String,String> parse(String d) throws UnsupportedEncodingException {
        Map<String,String> m = new HashMap<>();
        if (d == null) return m;
        for (String s : d.split("&")) {
            String[] kv = s.split("=", 2);
            m.put(
                URLDecoder.decode(kv[0], "UTF-8"),
                kv.length > 1 ? URLDecoder.decode(kv[1], "UTF-8") : ""
            );
        }
        return m;
    }

    static String hash(String p) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] b = md.digest(p.getBytes());
        StringBuilder sb = new StringBuilder();
        for (byte x : b) sb.append(String.format("%02x", x));
        return sb.toString();
    }

    static void send(HttpExchange ex, int c, String r) throws IOException {
        ex.sendResponseHeaders(c, r.length());
        ex.getResponseBody().write(r.getBytes());
        ex.close();
    }
}

//nssx jmaj ghoj yptq 