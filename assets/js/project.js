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
        <p class="mb-4 text-[#ACACAC] text-sm w-[120px] py-2 text-center border-[0.5px] border-white rounded-[100px] project-tag">
          ${content[index]["tags"]}
        </p>
        <p class="text-3xl mb-5 font-semibold tracking-tight text-white">
          ${content[index]["title"]}
        </p>
        <p class="mb-12 text-[#ACACAC] text-base lg:h-[100px]">
          ${truncatedDescription}
        </p>
        <a
          href="${content[index]["link"]}"
          class="py-4 px-8 text-white font-semibold bg-[#00A3FF] hover:bg-tertiary text-base cursor-pointer rounded-lg"
          >Voir le projet
          </a>
    `;
    contentImage.innerHTML = `
        <img
            src="/images/uploads/${content[index]["image"]}"
            alt="image achievement"
            class="w-full h-[600px] object-cover"
        />
    `;
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
