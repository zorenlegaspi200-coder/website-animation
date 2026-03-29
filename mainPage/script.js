function showPage(event, pageId, clickedLink) {
  event.preventDefault();

  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll(".nav-link");

  pages.forEach(page => page.classList.remove("active"));
  navLinks.forEach(link => link.classList.remove("active"));

  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  if (clickedLink) {
    clickedLink.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function sendMessage(event) {
  event.preventDefault();
  alert("Message sent! This is currently a demo form.");
}

/* HOME BACKGROUND SLIDESHOW */
const heroSlider = document.querySelector(".hero-slider");

const backgroundImages = [
  "images/background1.jpg",
  "images/background2.jpg",
  "images/background3.jpg"
];

let currentImageIndex = 0;

function changeHeroBackground() {
  if (!heroSlider) return;

  heroSlider.style.backgroundImage = `url("${backgroundImages[currentImageIndex]}")`;
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

changeHeroBackground();
setInterval(changeHeroBackground, 5000);
