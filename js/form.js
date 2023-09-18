//SEND DATA FROM FORM
const form = document.querySelector("form");

function validation(form) {
  //REMOVE ERROR FROM PAGE
  function removeError(input) {
    const parent = input.parentNode;

    if (input.classList.contains("_error")) {
      parent.querySelector(".errorLabel").remove();
      input.classList.remove("_error");
    }
  }

  //CREATE ERROR IM PAGE
  function createError(input, text) {
    const parent = input.parentNode;

    // const errorLabel = document.createElement("label");
    // errorLabel.classList.add("errorLabel");
    // errorLabel.textContent = text;
    // parent.append(errorLabel);

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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validation(form) === true) {
    const formData = new FormData(form);
    form.classList.add("__sending");

    const res = Object.fromEntries(formData);
    const payload = JSON.stringify(res);

    // for (item of formData) {
    //   console.log(item[0], item[1]);
    // }

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        form.classList.remove("__sending");
        form.reset();
      })
      .catch((err) => err);
  }
});
