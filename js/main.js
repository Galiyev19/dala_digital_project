const mobileNavBtn = document.querySelector(".header__burger-btn");
const nav = document.querySelector(".head_container");

mobileNavBtn.onclick = function () {
  console.log(1);
  mobileNavBtn.classList.toggle("header__burger-btn--active");
  nav.classList.toggle("header_mobile");
  document.body.classList.toggle("no-scroll");
};
