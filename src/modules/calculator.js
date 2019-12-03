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

export default calculator;