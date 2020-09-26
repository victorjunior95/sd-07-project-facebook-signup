const buttonLogin = document.querySelector('#button-login');
const emailOrPhone = document.querySelector('#user-email-phone');
const inputs = document.querySelectorAll('input');
const buttonRegister = document.querySelector('#facebook-register');
const formRegister = document.querySelector('#form-register');
const customGender = document.querySelector('#personalizado');
const gender = document.querySelector('#generos');
// alert('funcionou);
buttonLogin.addEventListener('click', function alerta() {
  alert(`${emailOrPhone.value}`);
});

function validate() {
  event.preventDefault();
  const message = document.createElement('h1');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      message.innerText = 'Campos inválidos';
    }
  }
  formRegister.appendChild(message);
}

function createInputForGender() {
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'gender-custom');
  newInput.setAttribute('placeholder', 'Gênero (opcional)');
  newInput.setAttribute('id', 'other-gender');
  gender.appendChild(newInput);
}

buttonRegister.addEventListener('click', validate);

customGender.addEventListener('click', createInputForGender);
