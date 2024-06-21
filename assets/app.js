import './styles/app.css';
import sal from 'sal.js'
import 'sal.js/dist/sal.css';

document.addEventListener('DOMContentLoaded', () => {
  sal({
    threshold: 0.5,
    once: true,
  });
});

