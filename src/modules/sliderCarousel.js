const sliderCarousel = () => {
  const sliderWrap = document.querySelector('.services-slider'),
        slidesWrap = document.querySelector('.services-slider-wrap'),
        allSlides = sliderWrap.querySelectorAll('.slide');
    
  let position = 0,
      slidesToShow = 5,
      slideWidth;

  const checkResponse = () => {
    let maxWidth = window.innerWidth;
    
    if( maxWidth < 1200 && maxWidth >= 991 ) {
      slidesToShow = 4;
    } 
    if( maxWidth < 991 && maxWidth >= 768 ) {
      slidesToShow = 3;
    }
    if( maxWidth < 768 && maxWidth >= 479 ) {
      slidesToShow = 2;
    }
    if( maxWidth < 479 ) {
      slidesToShow = 1;
    }

    slideWidth = Math.floor( 100 / slidesToShow);
  };
  checkResponse();

  window.addEventListener('resize', checkResponse);

  sliderWrap.addEventListener('click', (e) => {
    const target = e.target;

    switch(target) {
      case target.closest('.slider-arrow.prev, .slider-arrow.prev > img'):
        if( position >= 0 ) {
          --position;

          if( position < 0 ) {
            position = allSlides.length - slidesToShow;
          }
          slidesWrap.style.transform = `translateX(-${position * slideWidth}%)`;
        }
        break;
      case target.closest('.slider-arrow.next, .slider-arrow.next > img'):
        if( position <= allSlides.length - slidesToShow ) {
          ++position;

          if( position > allSlides.length - slidesToShow ) {
            position = 0;
          }

          slidesWrap.style.transform = `translateX(-${position * slideWidth}%)`;
        }
        break;
    }
  });
};

export default sliderCarousel;