'use_strict';

import toggleModals from './modules/toggleModals';
import manageArrow from './modules/manageArrow';
import manageBurger from './modules/manageBurger';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import calculator from './modules/calculator';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';
import smoothScroll from './modules/smoothScroll';


document.addEventListener('DOMContentLoaded', () => {
  //управление всплывающими блоками
  toggleModals();

  //управление стрелкой скролла к главному экрану
  manageArrow();

  //управление бургер-меню
  manageBurger();

  //плавный скролл до якорей
  smoothScroll();

  //слайдер
  slider('.main-slider');
  slider('.gallery-slider');

  //слайдер-карусель
  sliderCarousel();

  //калькулятор
  calculator();

  //Маска ввода номера телефона
  maskPhone('#callback_form-phone');
  maskPhone('#callback_form1-phone');
  maskPhone('#callback_form2-phone');
  maskPhone('#callback_footer_form-phone');
  maskPhone('#phone');

  //отправка форм
  sendForm('form[name="callback-form"]');
  sendForm('form[name="free-visit-form"]');
  sendForm('form[name="banner-form"]');
  sendForm('#card_order');
  sendForm('#footer_form');


});