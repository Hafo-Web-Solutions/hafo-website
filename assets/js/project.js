const cursorInner = document.querySelector(".cursor-inner");
const cursorOuter = document.querySelector(".cursor-outer");
let isHovering = false;

function attachHoverListeners() {
  if (!cursorInner || !cursorOuter) return; // Check if cursors are available

  document
    .querySelectorAll("a, button, input, select, textarea, .cursor-pointer")
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

  document.getElementById("prevProject").addEventListener("click", prev);
  document.getElementById("nextProject").addEventListener("click", next);
} else {
  // Variables pour stocker les données récupérées
  let content = [];

  // Fonction pour effectuer la requête fetch en GET
  function fetchAchievements() {
    fetch("/ajax-projects", {
      method: "GET",
    })
      .then((response) => {
        // Vérifiez si la réponse est correcte
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        // Convertissez la réponse en JSON
        return response.json();
      })
      .then((data) => {
        // Utilisez les données JSON pour initialiser les variables
        if (data.status === "success") {
          content = data.data;

          // Afficher la première image et le premier texte par défaut
          changeContent(currentIndex);
        } else {
          console.error("Erreur dans les données récupérées:", data.message);
        }
      })
      .catch((error) => {
        // Gérez les erreurs
        console.error("Il y a eu un problème avec la requête fetch :", error);
      });
  }

  // Fonction pour tronquer le texte à 20 mots
  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    return (
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : "")
    );
  }

  // Change text
  function changeContent(index) {
    const contentText = document.querySelector("#content-project-desktop");
    const contentImage = document.querySelector("#image-project-desktop");
    const truncatedDescription = truncateText(
      content[index]["description"],
      40
    );

    contentText.innerHTML = `
        <div class="flex justify-between items-center">
          <a href="#">
            <p class="mb-4 text-[#ACACAC] text-sm w-[120px] py-2 text-center border-[1px] border-borderBase rounded-[100px] project-tag">
              ${content[index]["tags"]}
            </p>
          </a>
        </div>
        <h3 class="default-h responsive-h3 mb-5">
          ${content[index]["title"]}
        </h3>
        <p class="default-p mb-12 lg:h-[100px]">
          ${truncatedDescription}
        </p>
        <a
          href="${content[index]["link"]}"
          <button class="blue-button">
            Voir le projet
          </button
          >
          </a>
    `;
    contentImage.innerHTML = `
        <img
            src="/images/uploads/${content[index]["image"]}"
            alt="image achievement"
            class="w-full h-[600px] object-cover"
        />
    `;

    // Attach hover listeners to new elements
    attachHoverListeners();
  }

  // Current index
  let currentIndex = 0;

  // Next project
  function nextProject() {
    currentIndex = (currentIndex + 1) % content.length;
    changeContent(currentIndex);
  }

  // Previous project
  function prevProject() {
    currentIndex = (currentIndex - 1 + content.length) % content.length;
    changeContent(currentIndex);
  }

  // Ajout d'un event listener aux boutons précédent et suivant
  document.getElementById("prevProject").addEventListener("click", prevProject);
  document.getElementById("nextProject").addEventListener("click", nextProject);

  // Appel de la fonction pour effectuer la requête et initialiser l'affichage
  fetchAchievements();
}
