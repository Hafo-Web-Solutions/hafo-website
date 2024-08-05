document.addEventListener("DOMContentLoaded", () => {
  const cursorInner = document.querySelector(".cursor-inner");
  const cursorOuter = document.querySelector(".cursor-outer");

  if (cursorInner && cursorOuter) {
    let mouseX = 0,
      mouseY = 0;
    let posX = 0,
      posY = 0;
    let isHovering = false;

    // Update cursor position
    const updateCursor = () => {
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;

      if (!isHovering) {
        cursorOuter.style.transform = `translate(${posX}px, ${posY}px)`;
      }
      cursorInner.style.transform = `translate(${posX}px, ${posY}px)`;

      requestAnimationFrame(updateCursor);
    };

    // Mouse move event
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Hover on elements
    function attachHoverListeners() {
      document
        .querySelectorAll("a, button, input, select, textarea, .cursor-pointer, .rn-progress-parent")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => {
            cursorInner.classList.add("cursor-hover");
            cursorOuter.classList.add("cursor-hover");
            isHovering = true;
          });
          el.addEventListener("mouseleave", () => {
            cursorInner.classList.remove("cursor-hover");
            cursorOuter.classList.remove("cursor-hover");
            isHovering = false;
          });
        });
    }

    attachHoverListeners();

    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";

    // Start the animation loop
    requestAnimationFrame(updateCursor);
  }
});
