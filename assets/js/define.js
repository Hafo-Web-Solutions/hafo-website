document.addEventListener("DOMContentLoaded", function () {
  //Recuperer les valeurs des textarea et les afficher dans le pdf
  function downloadPDF(elementKey) {

    if (![1, 2, 3, 4].includes(elementKey)) {
      return;
    }

    // Initialiser jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Titre du document
    doc.setFontSize(16);
    doc.text("Questionnaire de définition de vos objectifs", 10, 10);

    function removeAfterNewlineAndLastChar(str) {
      // Split the string at the first occurrence of \n and take the first part
      let result = str.split("\n")[0];
      // Remove the last character from the result
      result.slice(0, -1);
      return result;
    }

    const selectOptions = [
      { id: "1", value: "Développement de site web" },
      { id: "2", value: "Refonte" },
      { id: "3", value: "Maintenance" },
      { id: "4", value: "Référencement" },
    ];
    const selectedText =
      selectOptions.find((option) => option.id === String(elementKey))?.value ||
      "";

    const form = document.getElementById(`form${elementKey}`);

    let arrayInput = [];

    for (let i = 0; i < 8; i++) {
      // Sélectionne tous les éléments textarea
      let inputValue = form.children[i].children[1]?.value;
      arrayInput.push(inputValue);
    }

    let arrayLabel = [];

    for (let i = 0; i < 8; i++) {
      // Sélectionne tous les éléments textarea
      let labelValue = form.children[i].children[0].textContent;
      arrayLabel.push(removeAfterNewlineAndLastChar(labelValue));
    }

    doc.setFontSize(12);
    doc.text(`Type: ${selectedText}`, 10, 20);

    // Ajout des questions et réponses au document PDF
    doc.setFontSize(12);

    let yPos = 30; // Position de départ pour le texte
    const lineHeight = 8; // Hauteur de chaque ligne en points
    const maxLineLength = 180; // Longueur maximum d'une ligne en points

    for (let i = 0; i < arrayLabel.length; i++) {
      doc.text(arrayLabel[i], 10, yPos);
      yPos += lineHeight;

      // Divise la réponse en lignes de longueur maximale
      let lines = doc.splitTextToSize(arrayInput[i] || "", maxLineLength);

      // Ajoute chaque ligne de la réponse
      lines.forEach((line) => {
        doc.text(line, 10, yPos);
        yPos += lineHeight;
      });

      // Ajoute un espace après chaque réponse pour une séparation visuelle
      yPos += lineHeight / 2;
    }

    if (arrayInput[0] === '') {
      return;
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

  document.querySelector("#download-button1").addEventListener("click", () => downloadPDF(1));
  document.querySelector("#download-button2").addEventListener("click", () => downloadPDF(2));
  document.querySelector("#download-button3").addEventListener("click", () => downloadPDF(3));
  document.querySelector("#download-button4").addEventListener("click", () => downloadPDF(4));

});
