 //event listener scroll in console log
 window.addEventListener("scroll", function () {
    // console.log(window.scrollY);

    const block = document.querySelectorAll(".block-item");

    function scrollNumberAnimation(scrollY, index) {
      if (window.scrollY > scrollY) {
        block[index].querySelector(".number").style.color = "white";
        block[index].querySelector(".block-content").style.display = "flex";
      } else {
        block[index].querySelector(".number").style.color = "gray";
        block[index].querySelector(".block-content").style.display = "none";
      }
    }
    // format telephone media query
    const phone = window.matchMedia("(max-width: 768px)");

    if (phone.matches) {
      scrollNumberAnimation(1141, 0);
      scrollNumberAnimation(1394, 1);
      scrollNumberAnimation(1649, 2);
    } else {
    scrollNumberAnimation(550, 0);
    scrollNumberAnimation(811, 1);
    scrollNumberAnimation(1073, 2);
    }

    function scrollProgressBar(scrollY, index) {
      block[index].querySelector("span");
      const child = block[index].querySelector(".child");

      const maxHeight = parent.offsetHeight; // Hauteur totale du span parent
      const scrollPosition = window.scrollY; // Position de défilement actuelle

      // Position de défilement à partir de laquelle l'animation commence
      const startScroll = scrollY;

      // Calculer la nouvelle hauteur en fonction du défilement
      const newHeight = Math.max(0, scrollPosition - startScroll);

      // Mettre à jour la hauteur de la div enfant
      child.style.height = newHeight + "px";

      // Ajuster l'opacité en fonction de la hauteur actuelle
      if (scrollPosition > startScroll) {
        child.style.opacity = "1";
      } else {
        child.style.opacity = "0";
      }
    }
    
    if (phone.matches) {
      scrollProgressBar(1147, 0);
      scrollProgressBar(1401, 1);
      scrollProgressBar(1656, 2);
    } else {
      scrollProgressBar(555, 0);
      scrollProgressBar(816, 1);
      scrollProgressBar(1078, 2);
    }

  });