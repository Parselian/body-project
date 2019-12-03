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

export default toggleModals;