const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
const heroSlides = document.querySelectorAll(".hero-slide");

let currentHeroSlide = 0;

setInterval(() => {
  heroSlides[currentHeroSlide].classList.remove("active");

  currentHeroSlide++;

  if (currentHeroSlide >= heroSlides.length) {
    currentHeroSlide = 0;
  }

  heroSlides[currentHeroSlide].classList.add("active");
}, 5000);
