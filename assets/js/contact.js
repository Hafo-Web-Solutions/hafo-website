document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector('form[name="contact"]');
  const inputs = document.querySelectorAll(".form-contact-input");
  const errorContainers = document.querySelectorAll(".form-contact-error");
  const modal = document.getElementById("confirmationModal");

  // Apply error style
  function applyErrorStyle(input, errorContainer, errorMessage = null) {
    input.classList.add("border-red-500", "focus:outline-none");
    input.classList.remove(
      "border-borderBase",
      "focus:ring",
      "focus:ring-secondary",
      "focus:ring-[1px]"
    );
    errorContainer.textContent = errorMessage || input.validationMessage;
  }

  // Remove error style
  function removeErrorStyle(input, errorContainer) {
    input.classList.remove("border-red-500", "focus:outline-none");
    input.classList.add(
      "border-borderBase",
      "focus:ring",
      "focus:ring-secondary",
      "focus:ring-[1px]",
      "focus:outline-none"
    );
    errorContainer.textContent = "";
  }

  // Validate inputs before submitting
  function validateInputs() {
    let isValid = true;
    inputs.forEach((input, index) => {
      const errorContainer = errorContainers[index];
      if (!input.checkValidity()) {
        applyErrorStyle(input, errorContainer);
        isValid = false;
      } else {
        removeErrorStyle(input, errorContainer);
      }
    });
    return isValid;
  }

  // Handle reCAPTCHA token
  window.onSubmit = function (token) {
    submitForm(token);
  };

  // Submit the form with reCAPTCHA
  function submitForm(token) {
    document
      .querySelectorAll(".form-contact-error")
      .forEach((el) => (el.textContent = ""));
    inputs.forEach((input) => {
      input.classList.remove("border-red-500", "focus:outline-none");
      input.classList.add(
        "border-borderBase",
        "focus:ring",
        "focus:ring-secondary",
        "focus:ring-[1px]",
        "focus:outline-none"
      );
    });

    if (!validateInputs()) {
      grecaptcha.reset();
      return;
    }

    const formData = new FormData(contactForm);
    formData.append("g-recaptcha-response", token);

    fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          modal.classList.remove("hidden");
          modal.classList.add("flex");
        } else if (data.status === "error") {
          document
            .querySelectorAll(".form-contact-error")
            .forEach((el) => (el.textContent = ""));
          for (const [field, messages] of Object.entries(data.errors)) {
            const errorElement = document.getElementById(field + "Error");
            if (errorElement) {
              console.error(
                `Server error for ${field}: ${messages.join(", ")}`
              );
              errorElement.textContent = messages.join(", ");
              const input = document.querySelector(
                `[name="contact[${field}]"]`
              );
              if (input) {
                applyErrorStyle(input, errorElement, messages.join(", "));
              }
            }
          }
          grecaptcha.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        grecaptcha.reset();
      });
  }

  // Attach the reCAPTCHA to the submit event
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    grecaptcha.execute();
  });

  // Attach event listeners to inputs
  inputs.forEach((input, index) => {
    const errorContainer = errorContainers[index];
    input.addEventListener("input", function () {
      if (input.checkValidity()) {
        removeErrorStyle(input, errorContainer);
      } else {
        applyErrorStyle(input, errorContainer);
      }
    });
  });

  // Initiate contact form attachment color change
  document.getElementById("contact_attachment").addEventListener("change", function () {
      if (this.files && this.files.length > 0) {
        this.style.color = "white";
      } else {
        this.style.color = "initial";
      }
    });

  // Contact subject select color update
  let subjectSelect = document.getElementById("contact_subject");

  function updateColor() {
    if (subjectSelect.selectedIndex > 0) {
      subjectSelect.style.color = "white";
    } else {
      subjectSelect.style.color = "#ACACAC";
    }
  }

  updateColor();
  subjectSelect.addEventListener("change", updateColor);
});
