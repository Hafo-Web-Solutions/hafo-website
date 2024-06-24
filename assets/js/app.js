import "../css/app.css";
import Alpine from 'alpinejs';
import sal from "sal.js";
import "sal.js/dist/sal.css";

// Dynamic javaScript import from vendor directory
const requireContext = require.context('./vendor', true, /\.js$/);
requireContext.keys().forEach(requireContext);

// SAL initialization
document.addEventListener("DOMContentLoaded", () => {
  sal({
    threshold: 0.5,
    once: true,
  });
});

// AlpineJS initialization
window.Alpine = Alpine;
Alpine.start();

