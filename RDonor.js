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