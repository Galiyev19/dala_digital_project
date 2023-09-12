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

  // myMap.controls.remove("fullscreenControl");
  // myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  myMap.geoObjects.add(myPlacemark);
}
