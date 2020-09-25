function plotInvalid() {
  const formField = document.querySelector('.create-account');
  const msgError = document.createElement('p');
  msgError.textContent = 'Campos inválidos';
  formField.appendChild(msgError);
}

function createCustomGender() {
  const genderCustom = document.querySelector('.hidden-input');
  genderCustom.innerHTML = '<input name="gender-custom" placeholder="Gênero (opcional)" type="text">';
}

const btnLogin = document.querySelector('#button-login');
const formElements = document.querySelectorAll('.create-account [name]');
const btnFormSubmit = document.querySelector('#facebook-register');
const btnCustomGender = document.querySelector('#Personalizado');

btnCustomGender.addEventListener('click', createCustomGender);

btnLogin.addEventListener('click', () => {
  const emailValue = document.querySelector('#user-email-phone');
  alert(emailValue.value);
});

btnFormSubmit.addEventListener('click', () => {
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].validity.valid === false) {
      plotInvalid();
      break;
    }
  }
});
