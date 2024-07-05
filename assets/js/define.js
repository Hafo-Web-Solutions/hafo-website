document.addEventListener("DOMContentLoaded", function () {
  function validateForm() {
    // Sélectionne les quatre premiers textarea
    const textareas = document.querySelectorAll("textarea");
    const select = document.getElementById("type");
    const statusMessageDiv = document.getElementById("statusMessages");

    // Vérifie que la div pour les messages d'erreur existe
    if (!statusMessageDiv) {
      console.error("La div pour les messages.");
      return false;
    }

    // Réinitialise les messages d'erreur
    statusMessageDiv.innerHTML = "";

    let errors = [];

    // Vérifie que les quatre premiers textarea ne sont pas vides
    for (let i = 0; i < 4; i++) {
      if (!textareas[i].value.trim()) {
        errors.push(`Veuillez remplir la question ${i + 1}.`);
      }
    }

    // Vérifie que le champ select n'est pas vide
    if (select.value !== "1" && select.value !== "2" && select.value !== "3") {
      errors.push("Veuillez sélectionner une option pour le type.");
    }

    // Si des erreurs sont trouvées, les affiche dans la div et retourne false
    if (errors.length > 0) {
      errors.forEach((error) => {
        const errorParagraph = document.createElement("p");
        errorParagraph.innerHTML = ` 
          <div class="flex items-center p-4 mb-2 text-sm rounded-lg border border-borderBase bg-quaternary text-red-400">
          <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
            <p>${error}</p>
          </div>`;
        statusMessageDiv.appendChild(errorParagraph);
      });
      return false;
    }

    // Si tout est rempli, retourne vrai
    return true;
  }

  // affiche les questions suivantes a partir de deux mots
  $("textarea").on("input", function () {
    const currentDiv = $(this).closest("div");

    // Compter le nombre de mots dans le textarea
    const wordCount = $(this).val().trim().split(/\s+/).length;

    if (wordCount >= 2) {
      const nextDiv = currentDiv.next("div.hidden-div").first();
      if (nextDiv.length) {
        nextDiv.removeClass("hidden-div");
      }
    }
  });

  //change la couleur du select
  var subjectSelect = document.getElementById("type");

  function updateColor() {
    if (subjectSelect.selectedIndex > 0) {
      subjectSelect.style.color = "white";
    } else {
      subjectSelect.style.color = "#ACACAC";
    }
  }

  updateColor();
  subjectSelect.addEventListener("change", updateColor);

  //Recuperer les valeurs des textarea et les afficher dans le pdf
  function downloadPDF() {
    // Initialiser jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Sélectionne tous les éléments textarea
    const textareas = document.querySelectorAll("textarea");

    // Itère sur chaque textarea et récupère sa valeur
    const values = Array.from(textareas).map((textarea) => textarea.value);

    // Titre du document
    doc.setFontSize(16);
    doc.text("Questionnaire de définition de vos objectifs", 10, 10);

    // Ajouter "Type:" avec la valeur sélectionnée dans le select
    const selectedOption = document.getElementById("type").value;
    const selectOptions = [
      { id: "1", value: "Site vitrine" },
      { id: "2", value: "Site" },
      { id: "3", value: "Site complexe" },
    ];
    const selectedText =
      selectOptions.find((option) => option.id === selectedOption)?.value || "";

    doc.setFontSize(12);
    doc.text(`Type: ${selectedText}`, 10, 20);

    // Ajout des questions et réponses au document PDF
    doc.setFontSize(12);
    const questions = [
      "1/5. Quels sont les objectifs principaux de votre site d'entreprise ?",
      "2/5. Quelles fonctionnalités spécifiques votre site doit-il inclure pour atteindre ces objectifs ?",
      "3/5. Comment mesurez-vous le succès de votre site d'entreprise ?",
      "4/5. Avez-vous des intégrations spécifiques à incorporer ?",
      "5/5. Quel est votre public cible ?",
    ];

    let yPos = 30; // Position de départ pour le texte
    const lineHeight = 8; // Hauteur de chaque ligne en points
    const maxLineLength = 180; // Longueur maximum d'une ligne en points

    for (let i = 0; i < questions.length; i++) {
      doc.text(questions[i], 10, yPos);
      yPos += lineHeight;

      // Divise la réponse en lignes de longueur maximale
      let lines = doc.splitTextToSize(values[i] || "", maxLineLength);

      // Ajoute chaque ligne de la réponse
      lines.forEach((line) => {
        doc.text(line, 10, yPos);
        yPos += lineHeight;
      });

      // Ajoute un espace après chaque réponse pour une séparation visuelle
      yPos += lineHeight / 2;
    }

    // Sauvegarde du document PDF
    doc.save("Questionnaire.pdf");
    // Affiche le message de succès
    const successDiv = document.getElementById("statusMessages");
    successDiv.innerHTML = ` 
    <div class="flex items-center p-4 mb-2 text-sm rounded-lg border border-borderBase bg-quaternary text-green-400">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
      <p>Le PDF a été téléchargé avec succès !</p>
    </div>`;
  }

  document
    .querySelector("#download-button")
    .addEventListener("click", function () {
      if (validateForm()) {
        downloadPDF();
      }
    });
});
