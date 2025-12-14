import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.*;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.sql.*;
import java.security.MessageDigest;

import java.util.HashMap;
import java.util.Map;

public class SimpleFormServerDonor {
    // MySQL connection info
    static final String DB_URL = "jdbc:mysql://localhost:3306/mydb";
    static final String DB_USER = "root";
    static final String DB_PASS = "23331A0581";

    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        server.createContext("/register", new RegisterHandler());
        server.setExecutor(null); // default executor
        System.out.println("Server started at http://localhost:8080/register");
        server.start();
    }

    static class RegisterHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!exchange.getRequestMethod().equalsIgnoreCase("POST")) {
                String resp = "<h3>Only POST allowed</h3>";
                exchange.sendResponseHeaders(405, resp.getBytes().length);
                OutputStream os = exchange.getResponseBody();
                os.write(resp.getBytes());
                os.close();
                return;
            }

            InputStreamReader isr = new InputStreamReader(exchange.getRequestBody(), StandardCharsets.UTF_8);
            BufferedReader br = new BufferedReader(isr);
            StringBuilder buf = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                buf.append(line);
            }

            Map<String, String> params = parseForm(buf.toString());

            // Read form fields
            String name     = params.get("name");
            String gender   = params.get("gender");
            String ageStr   = params.get("age");
            String phone    = params.get("phone");
            String district = params.get("district");
            String mandal   = params.get("mandal");
            String group    = params.get("group");
            String email    = params.get("email");
            String password = params.get("password");
            String cpassword = params.get("cpassword");

            String response;

            // Simple validation
            if (!password.equals(cpassword)) {
                response = "<h3>Passwords do not match!</h3>";
            } else {
                try {
                    int age = Integer.parseInt(ageStr);
                    String passwordHash = hashPassword(password);

                    // Insert into MySQL
                    Class.forName("com.mysql.cj.jdbc.Driver");
                    Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);
                    PreparedStatement pst = conn.prepareStatement(
                        "INSERT INTO donors (name, gender, age, phone, district, mandal, blood_group, email, password_hash) " +
                        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
                    );
                    pst.setString(1, name);
                    pst.setString(2, gender);
                    pst.setInt(3, age);
                    pst.setString(4, phone);
                    pst.setString(5, district);
                    pst.setString(6, mandal);
                    pst.setString(7, group);
                    pst.setString(8, email);
                    pst.setString(9, passwordHash);

                    pst.executeUpdate();
                    pst.close();
                    conn.close();

                    response = "<h3>Registration successful!</h3>";

                } catch (Exception e) {
                    e.printStackTrace();
                    response = "<h3>Error: " + e.getMessage() + "</h3>";
                }
            }

            exchange.getResponseHeaders().add("Content-Type", "text/html");
            exchange.sendResponseHeaders(200, response.getBytes().length);
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }

    // Parses URL-encoded form
    private static Map<String, String> parseForm(String formData) throws UnsupportedEncodingException {
        Map<String, String> map = new HashMap<>();
        String[] pairs = formData.split("&");
        for (String pair : pairs) {
            String[] kv = pair.split("=", 2);
            String key = URLDecoder.decode(kv[0], StandardCharsets.UTF_8.name());
            String value = kv.length > 1 ? URLDecoder.decode(kv[1], StandardCharsets.UTF_8.name()) : "";
            map.put(key, value);
        }
        return map;
    }

    // Simple SHA-256 password hash
    private static String hashPassword(String password) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] hash = md.digest(password.getBytes(StandardCharsets.UTF_8));
        StringBuilder hex = new StringBuilder();
        for (byte b : hash) {
            hex.append(String.format("%02x", b));
        }
        return hex.toString();
    }
}