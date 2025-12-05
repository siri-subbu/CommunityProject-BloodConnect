document.addEventListener("DOMContentLoaded", () => {
    const bloodBanks = [
            {
              "name": "District Hospital Blood Bank, Anakapalli",
              "district": "Anakapalli",
              "mandal": "Anakapalli (Urban)",
              "address": "District Hospital Blood Bank;AH- Anakapalli, Anakapalli, Visakhapatnam, Andhra Pradesh 531001",
              "contact": "9848325561"
            },
            {
              "name": "M/s. NTR Area Hospital Blood Bank",
              "district": "Anakapalli",
              "mandal": "Anakapalli (Urban)",
              "address": "M/s. NTR Area Hospital Blood Bank;APVVP Hospital Premises, Anakapalli, Visakhapatnam, Andhra Pradesh 531001",
              "contact": "08924 223340"
            },
            {
            "name": "District Hospital Blood Bank, Paderu",
            "district": "Alluri Sitharama Raju",
            "mandal": "Paderu",
            "address": "District Hospital Blood Bank;District Hospital Premises, Paderu",
            "contact": "8500635226"
            },
            {
  "name": "Indian Red Cross Society Blood Bank, District Branch, Anantapur",
  "district": "Anantapur",
  "mandal": "Anantapur (Urban)",
  "address": "Indian Red Cross Society Blood Bank, District Branch;Near JNTU Engineering College, Sarada Nagar, Anantapur-515002, Andhra Pradesh",
  "contact": "08554 246344"
},
{
  "name": "Government General Hospital Blood Bank, Anantapur",
  "district": "Anantapur",
  "mandal": "Anantapur (Urban)",
  "address": "Government General Hospital Blood Bank, Anantapur;Government General Hospital, Anantapur-515001, Andhra Pradesh",
  "contact": "08554 275024"
},
{
  "name": "Sri Sathya Sai Institute of Higher Medical Sciences (SSSIHMS) Blood Bank",
  "district": "Annamayya",
  "mandal": "Puttaparthi",
  "address": "Sri Sathya Sai Institute of Higher Medical Sciences (SSSIHMS) Blood Bank;Prasanthigram, Puttaparthi, Annamayya District, Andhra Pradesh - 515134",
  "contact": "08555 287900"
},
{
  "name": "Rural Development Trust (RDT) Hospital Blood Bank",
  "district": "Annamayya",
  "mandal": "Bathalapalli",
  "address": "Rural Development Trust (RDT) Hospital Blood Bank;RDT Hospital, Bathalapalli, Annamayya District, Andhra Pradesh - 515661",
  "contact": "08559 244259"
},
{
  "name": "Red Cross Blood Storage Centre",
  "district": "Bapatla",
  "mandal": "Bapatla (Urban)",
  "address": "Red Cross Blood Storage Centre;Indian Red Cross Society, Zilla Parishad Compound, Bapatla, Andhra Pradesh 522101",
  "contact": "08647 222939",
},
{
  "name": "Area Hospital Blood Bank, Chirala",
  "district": "Bapatla",
  "mandal": "Chirala",
  "address": "Area Hospital Blood Bank, Chirala;Area Hospital, Chirala, Andhra Pradesh 523155",
  "contact": "85200 26320",
},
{
        "name": "Indian Red Cross Society Blood Bank",
        "district": "Chittoor",
        "mandal": "Chittoor (Urban)",
        "address": "Indian Red Cross Society Blood Bank;D.No: 20-119, PH Road, Red Cross Building, Chittoor - 517001",
        "contact": "08572 220287"
    },
    {
        "name": "District Head Quarters Hospital Blood Bank",
        "district": "Chittoor",
        "mandal": "Chittoor (Urban)",
        "address": "District Head Quarters Hospital Blood Bank;Head Quarters Hospital Compound, Chittoor - 517001",
        "contact": "9849229482"
    },
    {
        "name": "Government Hospital Blood Bank",
        "district": "Dr. B.R. Ambedkar Konaseema",
        "mandal": "Amalapuram",
        "address": "Government Hospital Blood Bank;Government Hospital, Amalapuram, Andhra Pradesh 533201",
        "contact": "9989106236"
    },
    {
        "name": "Buddala Nagaratnam Memorial Voluntary Blood Bank",
        "district": "Dr. B.R. Ambedkar Konaseema",
        "mandal": "Amalapuram",
        "address": "Buddala Nagaratnam Memorial Voluntary Blood Bank;Main Road, Km Agraharam, Amalapuram, Andhra Pradesh 533201",
        "contact": "Not Available"
    },
    {
        "name": "M/s. Government General Hospital Blood Bank",
        "district": "East Godavari",
        "mandal": "Kakinada (Urban)",
        "address": "M/s. Government General Hospital Blood Bank;Government General Hospital Premises, Ground Floor, Kakinada, Andhra Pradesh 533001",
        "contact": "0884 2302008"
    },
    {
        "name": "M/s. APVVP Area Hospital Blood Bank",
        "district": "East Godavari",
        "mandal": "Amalapuram",
        "address": "M/s. APVVP Area Hospital Blood Bank;Ground Floor, Area Hospital, Amalapuram, Andhra Pradesh 533201",
        "contact": "09505152234"
    },
    {
        "name": "M/s. Government Headquarters Hospital Blood Bank",
        "district": "West Godavari",
        "mandal": "Eluru (Urban)",
        "address": "M/s. Government Headquarters Hospital Blood Bank;Government Headquarters Hospital, Ground Floor, R.R. Peta, Eluru, Andhra Pradesh 534006",
        "contact": "08812 220333"
    },
    {
        "name": "Eluru Voluntary Blood Bank",
        "district": "West Godavari",
        "mandal": "Eluru (Urban)",
        "address": "Eluru Voluntary Blood Bank;Ramachandra Rao Pet, Eluru, Andhra Pradesh 534006",
        "contact": "Not Available"
    },
    {
        "name": "Government General Hospital Blood Bank",
        "district": "Guntur",
        "mandal": "Guntur (Urban)",
        "address": "Government General Hospital Blood Bank;Opposite Railway Station, 1st Floor, Government General Hospital, Guntur, Andhra Pradesh 522001",
        "contact": "9966641474"
    },
    {
        "name": "Indian Red Cross Society Blood Bank",
        "district": "Guntur",
        "mandal": "Guntur (Urban)",
        "address": "Indian Red Cross Society Blood Bank;Zilla Parishad Compound, Guntur, Andhra Pradesh 522004",
        "contact": "9985322589"
    },
    {
        "name": "Indian Red Cross Society Blood Bank",
        "district": "East Godavari",
        "mandal": "Kakinada (Urban)",
        "address": "Indian Red Cross Society Blood Bank;D.No: 8-14-39, Red Cross Street, Gandhi Nagar, Kakinada - 533004",
        "contact": "0884-2385800"
    },
    {
        "name": "Sri Surya Sakthi Voluntary Blood Bank",
        "district": "East Godavari",
        "mandal": "Kakinada (Urban)",
        "address": "Sri Surya Sakthi Voluntary Blood Bank;Shankar Plaza, Bhanugudi Junction, Kakinada - 533003",
        "contact": "Not Available"
    },
    {
        "name": "Dr. Pattabhi Red Cross Blood Centre",
        "district": "Krishna",
        "mandal": "Machilipatnam",
        "address": "Dr. Pattabhi Red Cross Blood Centre;DM&HO Campus, 21/276, Parasupeta, Machilipatnam - 521001",
        "contact": "7793939660"
    },
    {
        "name": "Area Hospital Blood Bank",
        "district": "Krishna",
        "mandal": "Gudivada",
        "address": "Area Hospital Blood Bank;Area Hospital, Gudivada - 521301",
        "contact": "7799990904"
    },
    {
        "name": "Indian Red Cross Society Blood Bank",
        "district": "Kurnool",
        "mandal": "Kurnool (Urban)",
        "address": "Indian Red Cross Society Blood Bank;Opposite Ravi Theatre, DM & HO Compound, Beside Control Room, Kurnool - 518002",
        "contact": "9849035931"
    },
    {
        "name": "Akshaya Blood Bank",
        "district": "Kurnool",
        "mandal": "Kurnool (Urban)",
        "address": "Akshaya Blood Bank;Opposite Gouri Gopal Hospital, Budhwar Peta, Kurnool - 518002",
        "contact": "Not Available"
    },
    {
        "name": "District Hospital Blood Bank",
        "district": "Kurnool",
        "mandal": "Nandyal",
        "address": "District Hospital Blood Bank;District Hospital, Noonepalli, Nandyal - 518502",
        "contact": "9959912781"
    },
    {
        "name": "Nandyal Blood Center",
        "district": "Kurnool",
        "mandal": "Nandyal",
        "address": "Nandyal Blood Center;Beside Sai Multi Speciality Hospital, 2nd Floor, Nandyal",
        "contact": "7386477466"
    },
    {
        "name": "NTR Memorial Trust Blood Bank",
        "district": "NTR",
        "mandal": "Vijayawada (Urban)",
        "address": "NTR Memorial Trust Blood Bank;Door No 12-23-33, 34, Puvada Vari Street, Opposite Yera Hospitals, Kothapeta, Guntur - 522001",
        "contact": "0863 2338444"
    },
    {
        "name": "Indian Red Cross Society Blood Bank, RCH-II",
        "district": "Parvathipuram Manyam",
        "mandal": "Parvathipuram",
        "address": "Indian Red Cross Society Blood Bank, RCH-II;Area Hospital Premises, First Floor, Belagam, Parvathipuram - 535501",
        "contact": "9908842182"
    },
    {
        "name": "District Hospital Blood Bank",
        "district": "Parvathipuram Manyam",
        "mandal": "Parvathipuram",
        "address": "District Hospital Blood Bank;District Hospital, Parvathipuram, Andhra Pradesh 535501",
        "contact": "Not Available"
    },
    {
        "name": "Indian Red Cross Society Blood Bank",
        "district": "Prakasam",
        "mandal": "Ongole (Urban)",
        "address": "Indian Red Cross Society Blood Bank;Vantavari Colony, Opposite Vegetable Market, Railway Station Road, Ongole - 523001",
        "contact": "8103071304"
    },
    {
        "name": "Government Hospital Blood Bank",
        "district": "Prakasam",
        "mandal": "Markapur",
        "address": "Government Hospital Blood Bank;Government Hospital Compound, Jr Colony, Markapur - 523316",
        "contact": "8596223485"
    },
    {
        "name": "Indian Red Cross Society Blood Bank",
        "district": "Sri Potti Sriramulu Nellore",
        "mandal": "Nellore (Urban)",
        "address": "Indian Red Cross Society Blood Bank;Red Cross Road, Near Madras Bus Stand, Opposite Vegetable Market, Nellore - 524003",
        "contact": "9347033100"
    },
    {
        "name": "APVVP Area Hospital Blood Bank",
        "district": "Sri Potti Sriramulu Nellore",
        "mandal": "Kavali",
        "address": "APVVP Area Hospital Blood Bank;APVVP Area Hospital, NH167BG, Kavali - 524201",
        "contact": "08626 244766"
    },
    {
        "name": "Sri Sathya Sai Institute of Higher Medical Sciences (SSSIHMS) Blood Bank",
        "district": "Sri Sathya Sai",
        "mandal": "Puttaparthi",
        "address": "Sri Sathya Sai Institute of Higher Medical Sciences (SSSIHMS) Blood Bank;Sri Sathya Sai Institute of Higher Medical Sciences, Prasanthigram, Puttaparthi - 515134",
        "contact": "08555 287900"
    },
    {
        "name": "Sri Sathya Sai Blood Donors Organisation",
        "district": "Sri Sathya Sai",
        "mandal": "Puttaparthi",
        "address": "Sri Sathya Sai Blood Donors Organisation;8/34 Quarters, 20th Ward, Peddakammavaripalli, Puttaparthi - 515134",
        "contact": "Not Available"
    },
    {
    "name": "Indian Red Cross Society Blood Bank",
    "district": "Srikakulam",
    "mandal": "Srikakulam (Urban)",
    "address": "Indian Red Cross Society Blood Bank;D.No. 8-5-2/A, Opposite Bapuji Kalamandir, Palakonda Road, Srikakulam – 532001",
    "contact": "08942 226555"
  },
  {
    "name": "Rajiv Gandhi Institute of Medical Sciences (RIMS) General Hospital Blood Bank",
    "district": "Srikakulam",
    "mandal": "Srikakulam (Urban)",
    "address": "Rajiv Gandhi Institute of Medical Sciences (RIMS) General Hospital Blood Bank;RIMS Government Hospital Premises, Balaga, Srikakulam – 532001",
    "contact": "08942 279679"
  },
  {
    "name": "Vijayasri Blood Center",
    "district": "Chittoor",
    "mandal": "Tirupati (Urban)",
    "address": "Vijayasri Blood Center;Near Subhamastu Shopping Mall, Reddy Reddy Colony, Bhavani Nagar, Tirupati",
    "contact": "9959482297"
  },
  {
    "name": "SVIMS Blood Bank",
    "district": "Chittoor",
    "mandal": "Tirupati (Urban)",
    "address": "SVIMS Blood Bank;Sri Venkateswara Institute of Medical Sciences (SVIMS), Alipiri Gate, Tirupati",
    "contact": "0877 2287777"
  },
  {
    "name": "Visakha Blood Centre",
    "district": "Visakhapatnam",
    "mandal": "Maharani Peta",
    "address": "Visakha Blood Centre;Opposite KGH Down Road, Maharani Peta, Visakhapatnam",
    "contact": "0891 2568588"
  },
  {
    "name": "Indian Red Cross Society Blood Bank",
    "district": "Visakhapatnam",
    "mandal": "Maharanipeta",
    "address": "Indian Red Cross Society Blood Bank;Opposite Zilla Parishad, Near Irrigation Department, Maharanipeta, Visakhapatnam",
    "contact": "0891 2568588"
  },
  {
    "name": "Rotary Blood Bank",
    "district": "Vizianagaram",
    "mandal": "Vizianagaram (Urban)",
    "address": "Rotary Blood Bank;Vizianagaram",
    "contact": "0891 2568588"
  },
  {
    "name": "Indian Red Cross Society Blood Bank",
    "district": "Vizianagaram",
    "mandal": "Cantonment",
    "address": "Indian Red Cross Society Blood Bank;D.No. 71/82, Near Ganesh Temple, Cantonment, Vizianagaram",
    "contact": "0891 2568588"
  },
  {
    "name": "Vijaya Sri Blood Bank",
    "district": "West Godavari",
    "mandal": "Suryarao Pet",
    "address": "Vijaya Sri Blood Bank;Opposite HDFC and Andhra Bank ATMs, Suryarao Pet, Vijayawada",
    "contact": "0866 2477777"
  },
  {
    "name": "IRCS Blood Centre",
    "district": "West Godavari",
    "mandal": "Narasapuram",
    "address": "IRCS Blood Centre;C/o. Community Healthcare Center, Narasapuram, West Godavari",
    "contact": "9291631555"
  },
        ];

        const resultsContainer = document.getElementById("resultsContainer");

        function displayBloodBanks(banks) {
            resultsContainer.innerHTML = "";
            if (banks.length === 0) {
                resultsContainer.innerHTML = "<p style='text-align:center;'>No blood banks found for the selected filters.</p>";
                return;
            }

            banks.forEach(bank => {
                const card = document.createElement("div");
                card.style.backgroundColor = "white";
                card.style.padding = "15px";
                card.style.borderRadius = "10px";
                card.style.width = "280px";
                card.style.boxShadow = "2px 2px 8px rgba(0,0,0,0.2)";

                //const groups = bank.availableGroups.map(g => `<span style='padding:3px 7px; background-color:#d8f3dc; border-radius:5px; margin-right:5px;'>${g}</span>`).join("");

                card.innerHTML = `
                    <h4 style="color:red; margin-bottom:5px;">${bank.name}</h4>
                    <p><strong>District:</strong> ${bank.district}</p>
                    <p><strong>Mandal:</strong> ${bank.mandal}</p>
                    <p><strong>Address:</strong> ${bank.address}</p>
                    <p><strong>Contact:</strong> ${bank.contact}</p>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(bank.address)}" target="_blank">
        <button style="width:100%; background-color:red; color:white; margin-top:10px;">Show Directions</button>
    </a>                `;
                resultsContainer.appendChild(card);
            });
        }

        displayBloodBanks(bloodBanks);
        const districtMandals = {
    "Alluri Sitarama Raju": ["Ananthagiri","Araku Valley","Dumbriguda","G.Madugula","Peda Bayalu","Munchingi Puttu","Hukumpeta","Paderu","Koyyuru","Gudem Kotha Veedhi","Devipatnam","Y. Ramavaram","Maredumilli","Rampachodavaram","Gangavaram","Addateegala","Rajavommangi","Chintur","Kunavaram","Velerupadu","Kukunuru","Etapaka"],
    "Anakapalli": ["Anakapalli","Kasimkota","Paravada","Achutapuram","Munagapaka","Ramabilli","Cheedikada","Devarapalle","Kothakota","K. Kotapadu","Chodavaram","Butchayyapeta","Ravikamatham","Rolugunta","Narsipatnam","Golugonda","Makavarapalem","Kotauratla","S. Rayavaram","Payakaraopeta","Nakkapalle","Yelamanchili","Atchutapuram","Sabbavaram","Anakapalli Rural"],
    "Anantapur": ["Anantapur","Narpala","B. Samudram","Atmakur","Garladinne","Kudair","Peddapappur","Tadimarri","Singanamala","Yadiki","Pamidi","Pedavadugur","Gooty","Vajrakarur","Vidapanakal","Uravakonda","Beluguppa","Kanaganapalle","Dharmavaram","Bathalapalle","Ramagiri","Kanaganapalle","Amadagur","Kadiri","Nallamada","Nambulapulikunta","Talupula","Gandlapenta","Tanakal","Nallacheruvu","O.D.Cheruvu","Mudigubba"],
    "Annamayya": ["Rayachoti","Tsundupalli","Ramapuram","Lakkireddypalli","Galiveedu","Sambepalli","Chinnamandem","Rajampet","Veeraballi","Penagalur","Nandalur","Kodur","Obulavaripalle","Pullampeta","Chitvel","Madanapalle","Nimmanapalle","Ramasamudram","Thamballapalle","Mulakalacheruvu","Peddamandyam","Kurabalakota","Peddathippasamudram","B.Kothakota","Kalikiri","Vayalpadu","Pileru","Gurramkonda","Kalakada","K.V. Palle"],
    "Bapatla": ["Bapatla","Vetapalem","Chirala","Cheerala","Epurupalem","Repalle","Vemuru","Cheruku palem","Bhattiprolu","Karlapalem","Pittalavanipalem","Pallapatla","Amruthalur","Pedapulivarru","Nagaram","Kolluru","Nizampatnam","Reddypalem","Tsundur","Kothapalli","Korisapadu","Marturu","Yaddanapudi","Santhanuthalapadu","Maddipadu"],
    "Chittoor": ["Chittoor","Gangadhara Nellore","Irala","Peddapanjani","Thavanampalle","Yadamari","Gudi Palle","Kuppam","Ramakuppam","Santhipuram","V. Kota","Palamaner","Gangavaram","Baireddipalle","Sodam","Kalikiri","Vayalpadu","Gurramkonda","Peddamandyam","Thamballapalle","Mulakalacheruvu","Ramasamudram","Nimmanapalle","Madanapalle","B. Kothakota","Kurabalakota","Peddathippasamudram","Kalikiri","Pileru","K.V. Palle","Chowdepalle","Somala","Sadum"],
    "Konaseema": ["Amalapuram","Allavaram","Mummidivaram","Kothapeta","I. Polavaram","P. Gannavaram","Uppalaguptam","Razole","Malikipuram","Mamidikuduru","Sakhinetipalli","Atreyapuram","Ravulapalem","Kapileswarapuram","Mandapeta","Alamuru","Rayavaram","Ramachandrapuram","Ainavilli","Ambajipeta","Karapa","Katrenikona"],
    "East Godavari": ["Rajahmundry (Rural)","Rajahmundry (Urban)","Kadiam","Rajanagaram","Korukonda","Seethanagaram","Gokavaram","Jaggampeta","Gandepalle","Kirlampudi","Prathipadu","Yeleswaram","Tuni","Kotananduru","Rowthulapudi","Sankhavaram","Rajavommangi","Devipatnam","Y. Ramavaram"],
    "Eluru": ["Eluru","Pedapadu","Pedavegi","Denduluru","Unguturu","Bhimadole","Ganapavaram","Nidamarru","Dwarka Tirumala","Kamavarapukota","T. Narsapuram","Jangareddygudem","Polavaram","Jeelugumilli","Koyyalagudem","Buttayagudem","Chintalapudi","Lingapalem","Kukunuru","Velerupadu","Kaikaluru","Mandavalli","Kalidindi","Mudinepalli","Agiripalli","Chatrai","Musunuru","Nuzvid"],
    "Guntur": ["Guntur (East)","Guntur (West)","Thullur","Mangalagiri","Tadepalle","Tadikonda","Pedakakani","Vatticherukuru","Chebrolu","Kollipara","Duggirala","Tenali","Ponnur","Kakumanu","Prathipadu","Pedanandipadu","Phirangipuram","Medikonduru"],
    "Kakinada": ["Kakinada (Rural)","Kakinada (Urban)","Samalkota","Peddapuram","Pithapuram","Gollaprolu","U. Kothapalli","Karapa","Kajuluru","Thallarevu","Gandepalli","Jaggampeta","Kirlampudi","Prathipadu","Yeleswaram","Tuni","Kotananduru","Rowthulapudi","Sankhavaram","Rajavommangi","Maredumilli"],
    "Krishna": ["Machilipatnam","Pedana","Guduru","Bantumilli","Ghantasala","Kruthivennu","Koduru","Avanigadda","Nagayalanka","Mopidevi","Challapalli","Movva","Vuyyuru","Kankipadu","Pamarru","Thotlavalluru","Pamidimukkala","Pedaparupudi","Gudivada","Nandivada","Gudlavalleru","Mandavalli","Kaikaluru","Unguturu","Bapulapadu","Penamaluru"],
    "Kurnool": ["Kurnool","Kallur","Orvakal","C. Belagal","Gudur","Nandikotkur","Pagidyala","Kothapalle","Jupadu Bunglow","Atmakur","Velgode","Srisailam","Peapully","Koilkuntla","Bandi Atmakur","Midthur","Pamulapadu","Nandavaram","Mahanandi","Allagadda","Chagalamarri","Dornipadu","Rudravaram","Sirvel","Uyyalawada","Panyam"],
    "Nandyal": ["Nandyal","Midthur","Pamulapadu","Bandi Atmakur","Pagidyala","Nandikotkur","Kothapalle","Jupadu Bunglow","Allagadda","Dornipadu","Chagalamarri","Sirvel","Uyyalawada","Rudravaram","Mahanandi","Panyam","Gadivemula","Sanjamala","Owk","Banaganapalle","Bethamcherla","Kolimigundla","Dhone","Peapully","Aspari","Chippagiri","Devanakonda","Gojalapuram","Holagunda","Yemmiganur"],
    "NTR": ["Vijayawada (Central)","Vijayawada (East)","Vijayawada (North)","Vijayawada (West)","Vijayawada (Rural)","Ibrahimpatnam","Kankipadu","Penamaluru","Thotlavalluru","Gannavaram","Bapulapadu","Unguturu","Nandigama","Kanchikacherla","Chandarlapadu","Veerullapadu","Nandavaram","Pedana","Gudivada","Gudlavalleru"],
    "Palnadu": ["Narasaraopet","Sattenapalli","Vinukonda","Chilakaluripet","Macherla","Gurazala","Piduguralla","Machavaram","Veldurthi","Rentachintala","Karempudi","Dachepalli","Bollapalli","Ipuru","Nuzendla","Nadendla","Edlapadu","Rompicherla","Savalyapuram","Pedakurapadu","Nekarikallu","Muppalla","Krosuru","Atchampet","Amaravathi","Rajupalem","Bellamkonda","Durgi"],
    "Parvathipuram Manyam": ["Parvathipuram","Komarada","Makkuva","Salur","Pachipenta","Merakamudidam","Jiyyammavalasa","Kurupam","Gummalakshmipuram","Seethampeta","Bhamini","Veeraghattam","Palakonda","Vangara","Regidi Amadalavalasa"],
    "Prakasam": ["Ongole","Kothapatnam","Santhanuthalapadu","Chinna Ganjam","Koruvalipadu","Addanki","Konakanamitla","Yaddanapudi","Ballikurava","Mundlamuru","Santhanuthalapadu","Maddipadu","Chimakurthy","Tangutur","Kandukur","Singarayakonda","Voletivaripalem","Gudluru","Lingasamudram","Ulavapadu","Deverapalle","Markapur","Giddalur","Kanigiri","Podili","Darisi","Ardhaveedu","Racherla","Tripuranthakam","Dornala","Peddaraveedu","Veligandla","Pamur","Bestawaripeta","Tarlupadu","Marripudi","Tallur","Ponnalur","N.G. Padu","C.S. Puram","Donakonda","Zarrigumalli"],
    "Sri Potti Sriramulu Nellore": ["Nellore (Rural)","Nellore (Urban)","Muthukur","T.P. Gudur","Venkatachalam","Manubolu","Chillakur","Balayapalle","Vakadu","Chittamuru","Gudur","Kota","Indukurpet","Podalakur","Rapur","Saidapuram","Kaluvoya","Chejerla","Atmakur","Marripadu","Duttalur","Vinjamur","Gudluru","Kandukuru","Kondapuram","Singarayakonda","Ulavapadu","Voruganti","Jaladanki","Allur","Dagadarthi","Kodavalur","Kavali","Vidavalur","Bogole","Bitragunta","Kavali (Rural)","Sullurpeta"],
    "Srikakulam": ["Srikakulam","Gara","Amadalavalasa","Narasannapeta","Polaki","Ponduru","Laveru","Ranastalam","Etcherla","Regidi Amadalavalasa","Vangara","Rajam","Santhakaviti","Veeraghattam","Seethampeta","Bhamini","Kothuru","Pathapatnam","Meilaputti","Palasa","Mandasa","Kanchili","Ichchapuram","Kaviti","Sompeta","Vajrapukothuru","Nandigam","Tekkali","Santhabommali","Kotabommali","Jalumuru","Sarubujjili","Burja","L.N. Peta","Saravakota"],
    "Tirupati": ["Tirupati (Urban)","Tirupati (Rural)","Chandragiri","Ramachandrapuram","Puthalapattu","Yerravaripalem","S.R. Puram","Vadamalapeta","Nindra","Karvetinagar","Vedurukuppam","Nagalapuram","Pitchatur","Satyavedu","Varadaiahpalem","Sullurpeta","Tada","Gudur","Kota","Vakadu","Chillakur","Balayapalle","Dakkili","Srikalahasti","Renigunta","Narayanavanam","Pakala","Chinnagottigallu","Kalakada","Yeguvapalem","S.V. Puram","G.D. Nellore","Chittoor (Rural)"],
    "Visakhapatnam": ["Visakhapatnam (Urban)","Visakhapatnam (Rural)","Gajuwaka","Pendurthi","Pedagantyada","Mulagada","Maharani Peta","Gopalapatnam","Bheemunipatnam","Anandapuram","Padmanabham","Seethammadhara"],
    "Vizianagaram": ["Vizianagaram","Gantyada","Pusapatirega","Denkada","Bhogapuram","Srungavarapukota","Jami","Vepada","Lakkavarapukota","Kothavalasa","Nellimarla","Cheepurupalli","Garividi","Gurla","Merakamudidam","Rajam","Vangara","Regidi Amadalavalasa","Santhakaviti","Bobbili","Ramabhadrapuram","Badangi","Therlam","Mentada","Gajapathinagaram","Dattirajeru","Bondapalli"],
    "West Godavari": ["Bhimavaram","Palakole","Veeravasaram","Penumantra","Mogaltur","Poduru","Achanta","Palacoderu","Undi","Penugonda","Iragavaram","Attili","Tanuku","Tadepalligudem","Pentapadu","Ganapavaram","Kovvur","Peravali","Chagallu","Devarapalli"],
    "YSR Kadapa": ["Kadapa","Vontimitta","Kamalakur","Vallur","Kodur","Siddavatam","Khajipet","Rajampet","Veeraballi","Penagalur","Nandalur","Kodur","Obulavaripalle","Pullampeta","Chitvel","Madanapalle","Nimmanapalle","Ramasamudram","Thamballapalle","Mulakalacheruvu","Peddamandyam","Kurabalakota","Peddathippasamudram","B.Kothakota","Kalikiri","Vayalpadu","Pileru","Gurramkonda","Kalakada","K.V. Palle","Chowdepalle","Somala","Sadum","Mydukur","Proddatur","Jammalamadugu","Pulivendula","Lingsapuram"]
};

// Populate districts
const districtSelect = document.getElementById("district");
const mandalSelect = document.getElementById("mandal");

Object.keys(districtMandals).forEach(district => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
});

// Update mandals based on selected district
districtSelect.addEventListener("change", () => {
    const selectedDistrict = districtSelect.value;
    
    // Clear previous mandals
    mandalSelect.innerHTML = '<option value="">-- Select Mandal --</option>';
    
    if (selectedDistrict && districtMandals[selectedDistrict]) {
        districtMandals[selectedDistrict].forEach(mandal => {
            const option = document.createElement("option");
            option.value = mandal;
            option.textContent = mandal;
            mandalSelect.appendChild(option);
        });
    }
});
const searchButton = document.getElementById("searchButton");

// Function to display filtered blood banks
searchButton.addEventListener("click", () => {
    const selectedDistrict = districtSelect.value;
    const selectedMandal = mandalSelect.value;

    let filteredBanks = bloodBanks;

    // Filter by district if selected
    if (selectedDistrict) {
        filteredBanks = filteredBanks.filter(bank => bank.district === selectedDistrict);
    }

    // Further filter by mandal if selected
    if (selectedMandal) {
        filteredBanks = filteredBanks.filter(bank => bank.mandal === selectedMandal);
    }

    // Display the filtered results
    displayBloodBanks(filteredBanks);
});

// Optionally, show all blood banks initially when no selection
displayBloodBanks(bloodBanks);

});
        