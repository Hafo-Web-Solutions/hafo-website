import "./styles/app.css";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import 'particles.js';

// SAL initialization
document.addEventListener("DOMContentLoaded", () => {
  sal({
    threshold: 0.5,
    once: true,
  });
});

// Back to top
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var progressPath = document.querySelector(".rn-progress-parent path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";

  var updateProgress = function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress);

  var offset = 50;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > offset) {
      document
        .querySelector(".rn-progress-parent")
        .classList.add("rn-backto-top-active");
    } else {
      document
        .querySelector(".rn-progress-parent")
        .classList.remove("rn-backto-top-active");
    }
  });

  document
    .querySelector(".rn-progress-parent")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    });
});

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 900 } },
    color: { value: "#212E48" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});