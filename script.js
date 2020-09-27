const btLogin = document.querySelector('#button-login');

btLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone').value;
  alert(login);
});

const radioPerso = document.querySelector('#Personalizado');
const inputPerso = document.querySelector('#inputPersonalizado');
radioPerso.addEventListener('click', () => {
  inputPerso.innerHTML = '<input type="text" name="gender-custom" placeholder="Gênero (opcional)">';
});

const btRegister = document.querySelector('#facebook-register');
const formInputs = document.querySelectorAll('.right-content input');
const formRadios = document.getElementsByName('gender');
const formGroup = document.querySelector('.right-content');
btRegister.addEventListener('click', (event) => {
  event.preventDefault();
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].value === '') {
      const invalidFields = document.createElement('div');
      formGroup.appendChild(invalidFields);
      invalidFields.innerText = 'Campos inválidos';
      break;
    }
  }
  if (formRadios[0].checked === false &&
    formRadios[1].checked === false &&
    formRadios[2].checked === false) {
    const invalidFields = document.createElement('div');
    formGroup.appendChild(invalidFields);
    invalidFields.innerText = 'Campos inválidos';
  }
});
