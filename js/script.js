document.addEventListener('DOMContentLoaded', () => {
  'use_strict';

  //управление всплывающими блоками
  const toggleModals = () => {
    const clubsList = document.querySelector('.clubs-list > ul'),
          freeVisitForm = document.getElementById('free_visit_form'),
          callbackForm = document.getElementById('callback_form'),
          menu = document.querySelector('.popup-menu'),
          giftModal = document.getElementById('gift');

    document.addEventListener('click', (e) => {
      const target = e.target;

      switch(target) {
        case target.closest('.clubs-list__title'):
          clubsList.classList.toggle('show');
          break;
        case target.closest('.open-popup'):
          freeVisitForm.classList.add('show');
          break;
        case target.closest('#header-callback__btn'):
          callbackForm.classList.add('show');
          break;
        case target.closest('.fixed-gift__img'):
          target.closest('.fixed-gift').remove();
          giftModal.classList.add('show');
          break;
        case target.closest('.menu-button__img, .close-menu-btn__img, .popup-menu > ul > li > a'): 
          menu.classList.toggle('show-flex');
          break;
        case target.closest('.close-btn, .close_icon, .overlay'):
          freeVisitForm.classList.remove('show');
          if(!!giftModal) {
            giftModal.classList.remove('show');
          }
          callbackForm.classList.remove('show');
          break;
      }
    });
  };
  toggleModals();

  //слайдер
  const slider = (selector) => {
    const wrapSlider = document.querySelector(selector),
        slide = wrapSlider.querySelectorAll('.slide'),
        dotsWrap = wrapSlider.querySelector('.slider-dots');
    let intervalId,
        counter = 0;
    
    slide.forEach(item => {
      const dot = document.createElement('li');
      dot.className = 'slider-dots__dot';
      dotsWrap.appendChild(dot);
    });

    const dots = dotsWrap.querySelectorAll('.slider-dots__dot');
    dots[0].classList.add('slider-dots__dot_active')
    
    const activateSlider = (delay = 2000) => {
      intervalId = setInterval(() => {
        slide[counter].classList.remove('fade-in');
        dots[counter].classList.remove('slider-dots__dot_active');
        counter++;
        if( counter >= slide.length ) {
          counter = 0;
        }
        slide[counter].classList.add('fade-in');
        dots[counter].classList.add('slider-dots__dot_active');
      }, delay);
    };

    wrapSlider.addEventListener('mouseover', (e) => {
      const target = e.target;

      if( target.closest('.slider-arrow, .slider-dots__dot')) {
        clearInterval(intervalId);
      }
    });

    wrapSlider.addEventListener('mouseout', (e) => {
      const target = e.target;

      if( target.matches('.slider-dots__dot, .slider-arrow') ) {
        activateSlider();
      }
    });

    wrapSlider.addEventListener('click', (e) => {
      const target = e.target;

      slide[counter].classList.remove('fade-in');
      dots[counter].classList.remove('slider-dots__dot_active');

      if( target.closest('.slider-arrow.prev') ) {
        counter--;
      } else if( target.closest('.slider-arrow.next') ) {
        counter++;
      } else if( target.closest('.slider-dots__dot') ) {
        dots.forEach((item, i) => {
          item.classList.remove('slider-dots__dot_active');

          if( item === target ) {
            item.classList.add('slider-dots__dot_active');
            counter = i;
          }
        });
      }

      if( counter >= slide.length) {
        counter = 0;
      } else if( counter < 0 ) {
        counter = slide.length - 1; 
      }

      slide[counter].classList.add('fade-in');
      dots[counter].classList.add('slider-dots__dot_active');
    });

    activateSlider();
  };
  slider('.main-slider');
  slider('.gallery-slider');

  //управление бургер-меню
  const manageBurger = () => {
    const burgerBtn = document.querySelector('.menu-button'),
          topMenu = document.querySelector('.top-menu'),
          breakpoint = topMenu.getBoundingClientRect().y;

    window.addEventListener('scroll', () => {

      if( window.innerWidth <= 768 ) {
        if( topMenu.getBoundingClientRect().y <= 0 ) {
          burgerBtn.classList.remove('hidden-large');
          burgerBtn.closest('.top-menu').classList.add('fixed-menu__button');
        }
        if( window.scrollY < breakpoint ) {
          burgerBtn.closest('.top-menu').classList.remove('fixed-menu__button');
        }
      } else {
        burgerBtn.classList.add('hidden-large');
      }
    });
  };
  manageBurger();

  //управление стрелкой скролла к главному экрану
  const manageArrow = () => {
    const header = document.querySelector('header'),
          toTopArrow = document.getElementById('totop'),
          breakpoint = header.getBoundingClientRect().height;
    
    window.addEventListener('scroll', () => {
      if( window.scrollY >= breakpoint ) {
        toTopArrow.className = 'show';
      } else {
        toTopArrow.className = '';
      }
    });
  };
  manageArrow();
});