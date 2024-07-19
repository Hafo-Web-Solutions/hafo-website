const { get } = require("core-js/core/dict");


if (window.innerWidth < 768) {
  let current = 0;
  function calculateCurrent() {
    current = (window.innerWidth - 64) * 2;
  }

  // Initial calculation
  calculateCurrent();

  // Add event listener for window resize to recalculate the value
  window.addEventListener("resize", calculateCurrent);
  let projectContent = document.querySelector(".project-content");

  function next() {
    if (current === 0) {
      return;
    }
    projectContent.style.right = `-${current - (window.innerWidth - 64)}px`;
    projectContent.animate(
      [
        { right: `-${current}px` },
        { right: `-${current - (window.innerWidth - 64)}px` },
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    );
    current -= window.innerWidth - 64;
  }

  function prev() {
    if (current === (window.innerWidth - 64) * 2) {
      return;
    }
    projectContent.style.right = `-${current + (window.innerWidth - 64)}px`;
    projectContent.animate(
      [
        { right: `-${current}px` },
        { right: `-${current + (window.innerWidth - 64)}px` },
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    );
    current += window.innerWidth - 64;
  }

  document.querySelector("#nextProject").addEventListener("click", next);
  document.querySelector("#prevProject").addEventListener("click", prev);
} else {

  
  // Images
  const images = [
    "./image/project/image-1.webp",
    "./image/project/image-2.webp",
    "./image/project/image-3.webp",
  ];

  // Text
  const text = [
    {
      p1: "Site Vitrine",
      p2: "PixelPioneer",
      p3: "PixelPioneer offre une vitrine élégante pour les créatifs digitaux. Découvrez un portfolio dynamique présentant les dernières tendances en design graphique et interactif, propulsant les marques dans l'ère numérique avec style et innovation.",
      p4: "https://copilot.microsoft.com/",
    },
    {
      p1: "Lorem ipsum",
      p2: "Media Blue",
      p3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      p4: "https://copilot.microsoft.com/",
    },
    {
      p1: "Dolor sit",
      p2: "Media Orange",
      p3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      p4: "https://copilot.microsoft.com/",
    },
  ];
 

  // Change text
  function changeText(index) {
    const contentText = document.querySelector("#text");
    contentText.innerHTML = `
        <p class="mb-4 text-[#ACACAC] text-sm w-[120px] py-2 text-center border-[0.5px] border-white rounded-[100px]">
          ${text[index].p1}
        </p>
        <p class="text-3xl mb-5 font-semibold tracking-tight text-white">
          ${text[index].p2}
        </p>
        <p class="mb-12 text-[#ACACAC] text-base lg:h-[100px]">
          ${text[index].p3}
        </p>
        <a
          href="${text[index].p4}"
          class="py-4 px-8 text-white font-semibold bg-[#00A3FF] hover:bg-tertiary text-base cursor-pointer rounded-lg"
          >Voir le projet
          </a>
        `;
  }

  // Change image
  function changeImage(index) {
    const contentImage = document.querySelector("#image");
    contentImage.innerHTML = `
            <img
                src="${images[index]}"
                alt="image achievement"
                class="w-full h-[600px] object-cover"
            />
        `;
  }

  // Current index
  let currentIndex = 0;

  // Next project
  function nextProject() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
    changeText(currentIndex);
    changeProjectMobile(currentIndex);
  }

  // Previous project
  function prevProject() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
    changeText(currentIndex);
    changeProjectMobile(currentIndex);
  }

  //add event listener to next and previous button
  document.getElementById("prevProject").addEventListener("click", prevProject);
  document.getElementById("nextProject").addEventListener("click", nextProject);

  // Display the first image by default
  changeImage(currentIndex);
  changeText(currentIndex);
}
