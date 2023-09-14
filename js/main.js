const mobileNavBtn = document.querySelector(".header__burger-btn");
const nav = document.querySelector(".head_container");

mobileNavBtn.onclick = function () {
  mobileNavBtn.classList.toggle("header__burger-btn--active");
  nav.classList.toggle("header_mobile");
  document.body.classList.toggle("no-scroll");
};

// CURRENT PAGE
const setActiveButton = () => {
  const links = document.querySelectorAll(".nav_list_menu_item");

  const currentPage = window.location.href;
  // console.log(link.children[4].children[0].href);

  links.forEach((item) => {
    if (item.children[0].href === currentPage) {
      item.classList.add("nav_list_menu_item__active");
    } else {
      item.classList.remove("nav_list_menu_item__active");
    }
  });
};

window.addEventListener("load", setActiveButton);

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
      createError(input, `Минимально кол-во символов: ${input.dataset.minLength}`);
      result = false;
    }
  }

  return result;
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validation(form) === true) {
    alert("Успешно");

    form.reset();
  }
});
