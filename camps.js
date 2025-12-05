const tabs = document.querySelectorAll(".tab-button");
const sections = document.querySelectorAll(".camp-section");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

// Sample data for camps
const sampleData = {
  upcoming: [
    { location: "Visakhapatnam", date: "2025-11-10", organizer: "Red Cross", details: "Town Hall, Main Road" },
    { location: "Guntur", date: "2025-11-15", organizer: "Health Dept", details: "Community Center" }
  ],
  ongoing: [
    { location: "Vijayawada", date: "2025-10-21", organizer: "BloodLine Trust", details: "Central Park" }
  ],
  completed: [
    { location: "Chintalavalasa, Vizianagaram", date: "2025-06-26", organizer: "MVGR College of Engineering", details: "MVGR College of Engineering on the occation of Sri.P Ashok Gajapathi Raju Birthday" }
  ]
};

Object.keys(sampleData).forEach(status => {
  const section = document.getElementById(status);
  sampleData[status].forEach(camp => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4>${camp.organizer}</h4>
      <p><strong>Location:</strong> ${camp.location}</p>
      <p><strong>Date:</strong> ${camp.date}</p>
      <p><strong>Details:</strong> ${camp.details}</p>
    `;
    section.appendChild(card);
  });
});

// Modal control
const modal = document.getElementById("campFormModal");
const btn = document.getElementById("contributeButton");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Form submission
document.getElementById("campForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Camp details submitted successfully!");
  modal.style.display = "none";
  e.target.reset();
});
