// Typing animation
const typingElement = document.getElementById("typing");
const tagline = "Train Smart. Stay Fit. Be Unstoppable.";
let i = 0;
function typeText() {
  if (i < tagline.length) {
    typingElement.innerHTML += tagline.charAt(i);
    i++;
    setTimeout(typeText, 80);
  }
}
typeText();

// Popup controls
function openPopup(id) { document.getElementById(id).style.display = "block"; }
function closePopup(id) { document.getElementById(id).style.display = "none"; }

// Show trainers
function showTrainers(type) {
  document.getElementById("male-trainers").classList.toggle("hidden", type !== "male");
  document.getElementById("female-trainers").classList.toggle("hidden", type !== "female");
}
