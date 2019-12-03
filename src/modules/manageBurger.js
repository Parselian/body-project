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

export default manageBurger;