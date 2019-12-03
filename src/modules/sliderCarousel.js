const sliderCarousel = () => {
  const sliderWrap = document.querySelector('.services-slider'),
        allSlides = sliderWrap.querySelectorAll('.slide'),
        slideWidth = allSlides[0].getBoundingClientRect().width,
        slidesToScroll = 1;
        
  let position = 0,
      counter = 0;

  sliderWrap.addEventListener('click', (e) => {
    const target = e.target;

    switch(target) {
      case target.closest('.slider-arrow.prev'):
        counter--;
        position += slideWidth * slidesToScroll;
        sliderWrap.style.marginLeft = `${position}px`;
        console.log(position);
        if( counter < 0 ) {
          counter = allSlides.length;
          sliderWrap.style.marginLeft = `-${slideWidth * 5}px`;
          console.log(counter);
        }
        break;
      case target.closest('.slider-arrow.next'):
        position -= slideWidth * slidesToScroll;
        sliderWrap.style.marginLeft = `${position}px`;
        console.log(position);
        break;
    }
  });
};

export default sliderCarousel;