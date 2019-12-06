const smoothScroll = () => {
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 400,
        fps = 50;

  anchors.forEach((item) => {
    
    item.addEventListener('click', (e) => {
      if(item.className === 'redirect') {
        return;
      } 
      e.preventDefault();
      let coordY; 
      
      coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.scrollY;   

      const scrolling = setInterval( () => {
        let scrollBy = coordY / fps;

        if (scrollBy > window.scrollY - coordY && window.innerHeight + window.scrollY < document.body.offsetHeight) {
          window.scrollBy(0, scrollBy);
        } else if ( item.id === 'totop' ) {
          const totop = setInterval(() => {
            let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

            if(top > 0) {
              window.scrollBy(0, -50);
            } else {
              clearInterval(totop);
              return false;
            }
          }, animationTime / fps);
          
          clearInterval(scrolling);
        } else {
          window.scrollTo(0, coordY);
          clearInterval(scrolling);
        }
      }, animationTime / fps);
    });
  }); 
};

export default smoothScroll;