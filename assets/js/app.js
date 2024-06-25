import "../css/app.css";
import Alpine from "alpinejs";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

// Dynamic javaScript import from vendor directory
const requireContext = require.context("./vendor", true, /\.js$/);
requireContext.keys().forEach(requireContext);

// SAL initialization
document.addEventListener("DOMContentLoaded", () => {
  sal({
    threshold: 0.5,
    once: true,
  });
});

// AlpineJS initialization
document.addEventListener("DOMContentLoaded", () => {
  window.Alpine = Alpine;
  Alpine.start();
});

// Swiper initialization & blog slider
document.addEventListener("DOMContentLoaded", () => {
  const swiperInstance = new Swiper(".swiper-container", {
    direction: "horizontal",
    spaceBetween: 32,
    loop: true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
    touchRatio: 1,
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        loop: false,
      },
      1280: {
        slidesPerView: 4,
        loop: false,
      },
    },
  });
});
