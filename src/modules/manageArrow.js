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

export default manageArrow;