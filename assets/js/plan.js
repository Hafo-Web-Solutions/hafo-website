//event listener scroll in console log
window.addEventListener("scroll", function () {
  const block = document.querySelectorAll(".block-item");

  function scrollNumberAnimation(scrollY, index) {
    if (window.scrollY > scrollY) {
      block[index].querySelector(".block-number-plan").style.color = "white";
      block[index].querySelector(".block-content-plan").style.display = "flex";
    } else {
      block[index].querySelector(".block-number-plan").style.color = "gray";
      block[index].querySelector(".block-content-plan").style.display = "none";
    }
  }

  function scrollProgressBar(scrollY, index) {
    const parent = block[index].querySelector(".parent-plan");
    const child = block[index].querySelector(".child-plan");

    const maxHeight = parent.offsetHeight; // Hauteur totale du span parent
    const scrollPosition = window.scrollY; // Position de défilement actuelle

    // Position de défilement à partir de laquelle l'animation commence
    const startScroll = scrollY;

    // Calculer la nouvelle hauteur en fonction du défilement
    const newHeight = Math.min(
      maxHeight,
      Math.max(0, scrollPosition - startScroll)
    );

    // Mettre à jour la hauteur de la div enfant
    child.style.height = newHeight + "px";

    // Ajuster l'opacité en fonction de la hauteur actuelle
    if (scrollPosition > startScroll) {
      child.style.opacity = "1";
    } else {
      child.style.opacity = "0";
    }
  }

  // responsive media query
  const phone = window.matchMedia("(max-width: 450px)");
  const tablet = window.matchMedia("(max-width: 915px)");

  if (phone.matches) {
    scrollNumberAnimation(1141, 0);
    scrollNumberAnimation(1394, 1);
    scrollNumberAnimation(1649, 2);
    scrollNumberAnimation(1917, 3);
    scrollNumberAnimation(2183, 4);
    scrollNumberAnimation(2468, 5);
  } else if (tablet.matches) {
    scrollNumberAnimation(870, 0);
    scrollNumberAnimation(1121, 1);
    scrollNumberAnimation(1384, 2);
    scrollNumberAnimation(1663, 3);
    scrollNumberAnimation(2350, 4);
    scrollNumberAnimation(2642, 5);
  } else {
    scrollNumberAnimation(550, 0);
    scrollNumberAnimation(811, 1);
    scrollNumberAnimation(1073, 2);
    scrollNumberAnimation(1663, 3);
    scrollNumberAnimation(1928, 4);
    scrollNumberAnimation(2183, 5);
  }

  if (phone.matches) {
    scrollProgressBar(1147, 0);
    scrollProgressBar(1401, 1);
    scrollProgressBar(1656, 2);
    scrollProgressBar(1924, 3);
    scrollProgressBar(2190, 4);
    scrollProgressBar(2475, 5);
  } else if (tablet.matches) {
    scrollProgressBar(870, 0);
    scrollProgressBar(1128, 1);
    scrollProgressBar(1391, 2);
    scrollProgressBar(1670, 3);
    scrollProgressBar(2357, 4);
    scrollProgressBar(2649, 5);
  } else {
    scrollProgressBar(555, 0);
    scrollProgressBar(816, 1);
    scrollProgressBar(1078, 2);
    scrollProgressBar(1670, 3);
    scrollProgressBar(1933, 4);
    scrollProgressBar(2190, 5);
  }
});
