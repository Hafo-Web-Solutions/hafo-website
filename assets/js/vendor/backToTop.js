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
  
    // Function to update the progress of the stroke offset based on the scroll position
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
  
    // Add a scroll event listener to show/hide the back-to-top button based on scroll position
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
  
    // Add a click event listener to the .rn-progress-parent element to smoothly scroll to the top when clicked
    document
      .querySelector(".rn-progress-parent")
      .addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return false;
      });
  });