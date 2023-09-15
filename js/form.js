//SEND DATA FROM FORM

function validation(form) {
  function removeError(input) {
    const parent = input.parentNode;

    if (input.classList.contains("_error")) {
      parent.querySelector(".errorLabel").remove();
      input.classList.remove("_error");
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;

    const errorLabel = document.createElement("label");
    errorLabel.classList.add("errorLabel");
    errorLabel.textContent = text;
    parent.append(errorLabel);

    input.classList.add("_error");
  }

  let result = true;
  const inputs = form.querySelectorAll("._req");

  for (const input of inputs) {
    removeError(input);

    if (input.dataset.required === "true") {
      if (input.value === "") {
        createError(input, "Заполните поле");
        result = false;
      }
    }

    if (input.value.length < input.dataset.minLength) {
      createError(
        input,
        `Минимально кол-во символов: ${input.dataset.minLength}`
      );
      result = false;
    }
  }

  return result;
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validation(form) === true) {
    form.classList.add("__sending");
    setTimeout(() => {
      form.classList.remove("__sending");
    }, 3000);
  } else {
  }
});