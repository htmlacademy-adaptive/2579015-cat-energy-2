/* Логика открытия навигации */
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/* Подстановка кастомного маркера в карту */
const ymaps = window.ymaps;
ymaps.ready(() => {
  const mapElement1 = document.getElementById('map');
  if(mapElement1) {
    const myMap = new ymaps.Map(mapElement1, {
      center: [59.938679, 30.3230044],
      zoom: 16,
      controls: []
    });
    const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: '../images/map/pin.png',
      iconImageSize: [57, 53],
      iconImageOffset: [-26, -42]
    });
    myMap.geoObjects.add(myPlacemark);
  }
});
