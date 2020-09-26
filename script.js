const buttonLogin = document.getElementById('button-login');
const emailInput = document.querySelector('#user-email-phone');
const genders = document.querySelector('.genders');
const gendersInputs = genders.querySelectorAll('input');

buttonLogin.addEventListener('click', () => {
  alert(`${emailInput.value}`);
});

const pAlert = document.querySelector('.alert');
const buttonSubmit = document.querySelector('#facebook-register');

buttonSubmit.addEventListener('click', () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((element) => {
    if (element.required === true) {
      if (element.type !== 'radio') {
        if (element.value === '') {
          pAlert.innerText = 'Campos inválidos';
        }
      }
    }
  });

  let count = 0;

  gendersInputs.forEach((element) => {
    if (!element.checked) {
      count += 1;
    }
    if (count >= 3) {
      pAlert.innerText = 'Campos inválidos';
    }
  });
});
