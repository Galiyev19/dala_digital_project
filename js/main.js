const mobileNavBtn = document.querySelector(".header__burger-btn");
const nav = document.querySelector(".head_container");

mobileNavBtn.onclick = function () {
  mobileNavBtn.classList.toggle("header__burger-btn--active");
  nav.classList.toggle("header_mobile");
  document.body.classList.toggle("no-scroll");
};

// YANDEX MAP
ymaps.ready(init);
function init() {
  // Создание карты.
  const myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [51.66506, 39.163142],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
  });

  const myPlacemark = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [51.66506, 39.163142],
    },
  });

  myMap.geoObjects.add(myPlacemark);
}

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
