import { slider }   from "./slider.js";

function openNavMenus() {
  const buttons = document.querySelectorAll('.header_wrapper-nav--list__link');
  const wrappers = document.querySelectorAll('.menusImages_wrapper');
  const images = document.querySelectorAll('[data-nav-images="navImage"]');

  buttons.forEach(button => {
    button.addEventListener('click', function () {

      buttons.forEach(removeClassButton => {
        if (removeClassButton !== button) {
          removeClassButton.classList.remove('navLinkAnimation');
        }
      });

      if (button.classList.contains('navLinkAnimation')) {
        button.classList.remove('navLinkAnimation');
      } else {
        button.classList.add('navLinkAnimation');
      }

      wrappers.forEach((wrapper) => {
        images.forEach(image => image.addEventListener('click', function () {
          wrapper.classList.remove('open');
          button.classList.remove('navLinkAnimation');
        }));

        if (wrapper.id !== button.getAttribute('data-button')) {
          wrapper.classList.remove('open');
        }
      });

      switch (button.innerHTML) {
        case 'Адреса':
          const adress = document.getElementById('adress');
          adress.classList.toggle('open');
          break;
        case 'Меню':
          const menu = document.getElementById('menu');
          menu.classList.toggle('open');
          slider();
          break;
        case 'Кальяни':
          const hookas = document.getElementById('hookas');
          hookas.classList.toggle('open');
          break;
        case 'Бар':
          const bar = document.getElementById('bar');
          bar.classList.toggle('open');
          break;
        case 'Тарифи':
          const tariffs = document.getElementById('tariffs');
          tariffs.classList.toggle('open');
          break;
      }
    });
  });
}

openNavMenus();
