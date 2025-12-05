const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));

const nameEl = document.getElementById("don-name");
const bloodEl = document.getElementById("don-blood");
const phoneEl = document.getElementById("don-phone");
const districtEl = document.getElementById("don-district");

// Wait for Firebase auth to confirm who’s logged in
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const donorRef = doc(db, "donors", user.uid);
    const donorSnap = await getDoc(donorRef);

    if (donorSnap.exists()) {
      const donor = donorSnap.data();
      nameEl.textContent = donor.name || "—";
      bloodEl.textContent = donor.bloodGroup || "—";
      phoneEl.textContent = donor.contact || "—";
      districtEl.textContent = donor.district || "—";
    } else {
      console.log("No donor record found for this user.");
    }
  } else {
    // No user logged in — redirect to login page
    window.location.href = "RDonor.html";
  }
});
