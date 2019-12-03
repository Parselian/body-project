'use_strict';

import toggleModals from './modules/toggleModals';
import manageArrow from './modules/manageArrow';
import manageBurger from './modules/manageBurger';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import calculator from './modules/calculator';

document.addEventListener('DOMContentLoaded', () => {


  //управление всплывающими блоками
  toggleModals();

  //управление стрелкой скролла к главному экрану
  manageArrow();

  //управление бургер-меню
  manageBurger();

  //слайдер
  slider('.main-slider');
  slider('.gallery-slider');

  //слайдер-карусель
  // sliderCarousel();

  //калькулятор
  calculator();
});