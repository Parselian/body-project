const sendForm = (selector) => {
  const popupSuccess = document.getElementById('thanks'),
        popupError = document.getElementById('error'),
        form = document.querySelector(selector),
        formInputs = form.querySelectorAll('input'),
        check = form.querySelector('.check'),
        spinner = document.createElement('div'),
        checkAgreement = document.createElement('div');
  
  checkAgreement.textContent = 'Пожалуйста, поставьте галочку!';
  checkAgreement.className = 'check_error';

  let intervalId,
      counter = 0;
  
  const animateSpinner = () => {
    spinner.className = 'spinner';
    form.appendChild(spinner);

    intervalId = setInterval(() => {
      counter += 5;
      if(counter >= 360) {
        counter = 0;
      }
      spinner.style.transform = `rotate(${counter}deg)`;
      intervalId;
    }, 20);
  };
        
  const validationFields = () => {
    form.addEventListener('input', (e) => {
      const target = e.target;

      if( target.id === 'promocode' ) {
        return;
      } else if( target.name === 'name' ) {
        target.value = target.value.replace(/[^а-я|А-Я| ]/g, ''); 
      } else if( target.name === 'phone' ) {
        target.value = target.value.replace(/^\D/g, ''); 
      }
    });
  };
  validationFields();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkAgreement.remove();

    const formData = new FormData(form);
    
    if( check.checked ) {
      animateSpinner();

      const pushData = (formData) => {
        return fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: formData
        });
      };

      pushData(formData).then( response => {
        clearInterval(intervalId);
        spinner.remove();
        if( response.status !== 200 ) {
          popupError.classList.add('show');
          throw new Error( 'Something wrong! network status isn`t 200' );
        }
        popupSuccess.classList.add('show');

        formInputs.forEach(item => {
          if( item.type === 'radio' || item.name === 'form_name') {
            return;
          } else if( item.type === 'checkbox' ) {
            item.checked = false;
          } else {
            item.value = '';
          }

        });
      })
      .catch( error => {
        console.error(error);
      });
    } else {
      form.appendChild(checkAgreement);
      return false;
    }
  });
};

export default sendForm;