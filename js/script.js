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

  //управление бургер-меню
  const manageBurger = () => {
    const burgerBtn = document.querySelector('.menu-button'),
          topMenu = document.querySelector('.top-menu'),
          breakpoint = topMenu.getBoundingClientRect().y;

    window.addEventListener('scroll', () => {
      if( document.documentElement.clientWidth <= 768 ) {
        if( topMenu.getBoundingClientRect().y < 0 ) {
          burgerBtn.closest('.top-menu').classList.add('fixed-menu__button');
        }
        if( window.scrollY < breakpoint ) {
          burgerBtn.closest('.top-menu').classList.remove('fixed-menu__button');
        }
      } else if( document.documentElement.clientWidth > 769 ) {
        burgerBtn.closest('.top-menu').classList.remove('fixed-menu__button');
      }
    });
  };
  manageBurger();

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

  //слайдер-карусель
  const sliderCarousel = () => {
    const sliderWrap = document.querySelector('.services-slider'),
          slidesWrap = document.querySelector('.services-slider-wrap'),
          allSlides = sliderWrap.querySelectorAll('.slide'),
          slideWidth = allSlides[0].getBoundingClientRect().width,
          slidesToShow = 5;
      
    let position = 0;
  
    sliderWrap.addEventListener('click', (e) => {
      const target = e.target;
  
      switch(target) {
        case target.closest('.slider-arrow.prev'):
          if( position > 0 ) {
            --position;
  
            if( position < 0 ) {
              position = allSlides.length - slidesToShow;
            }
            slidesWrap.style.transform = `translateX(-${slideWidth}%)`;
          }
          break;
        case target.closest('.slider-arrow.next'):
          if( position < allSlides.length - slidesToShow ) {
            ++position;
  
            if( position > allSlides.length - slidesToShow ) {
              position = 0;
            }
  
            slidesWrap.style.transform = `translateX(-${slideWidth}%)`;
          }
          break;
      }
    });
  };
  // sliderCarousel();

  //калькулятор
  const calculator = () => {
    const calculator = document.querySelector('.calculator'),
          timeInputs = document.querySelectorAll('input[name="card-type"]'),
          cardLetoMozaika = document.getElementById('card_leto_mozaika'),
          promocode = document.getElementById('promocode'),
          priceTotal = document.getElementById('price-total');
    if( calculator ) {
      calculator.addEventListener('input', () => {
        let selectedCardPrice;
  
        timeInputs.forEach(item => {
          if( item.checked ) {
            switch (+item.value) {
              case 1:
                selectedCardPrice = cardLetoMozaika.checked ? 1999 : 2999;
                break;
              case 6:
                selectedCardPrice = cardLetoMozaika.checked ? 9990 : 14990;
                break;
              case 9:
                selectedCardPrice = cardLetoMozaika.checked ? 13900 : 21990;
                break;
              case 12:
                selectedCardPrice = cardLetoMozaika.checked ? 19900 : 24990;
                break;
            }
          }
        });
  
        if(promocode.value === 'ТЕЛО2019' ) {
          priceTotal.textContent = Math.floor(selectedCardPrice * 0.7);
        } else {
          priceTotal.textContent = selectedCardPrice;
        }
      });
    }
  };
  calculator();
});