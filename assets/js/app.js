import "../css/app.css";
import Alpine from "alpinejs";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


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

// Calendly initialization
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('rdv-button').addEventListener('click', function() {
    Calendly.initPopupWidget({url: 'https://calendly.com/hafowebsolutions/30min'});
    return false;
  });
  document.getElementById('rdv-button2').addEventListener('click', function() {
    Calendly.initPopupWidget({url: 'https://calendly.com/cedric-hafowebsolutions/30min'});
    return false;
  });
});

// AlpineJS initialization
document.addEventListener("DOMContentLoaded", () => {
  window.Alpine = Alpine;
  Alpine.start();
});

// Swiper initialization & blog slider
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-container", {
    direction: "horizontal",
    spaceBetween: 32,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
