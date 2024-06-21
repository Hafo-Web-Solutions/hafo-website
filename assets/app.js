import './styles/app.css';
import sal from 'sal.js'
import 'sal.js/dist/sal.css';

// SAL initialization
document.addEventListener('DOMContentLoaded', () => {
  sal({
    threshold: 0.5,
    once: true,
  });
});

// Back to top
document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    var progressPath = document.querySelector('.rn-progress-parent path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function() {
        var scroll = window.pageYOffset || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    var offset = 50;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > offset) {
            document.querySelector('.rn-progress-parent').classList.add('rn-backto-top-active');
        } else {
            document.querySelector('.rn-progress-parent').classList.remove('rn-backto-top-active');
        }
    });

    document.querySelector('.rn-progress-parent').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    });
});