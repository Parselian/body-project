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

export default slider;