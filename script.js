const buttonLogin = document.querySelector('#button-login');
const emailOrPhone = document.querySelector('#user-email-phone');
const inputs = document.querySelectorAll('.print');
const buttonRegister = document.querySelector('#facebook-register');
const formRegister = document.querySelector('.main-content form');
const customGender = document.querySelector('#personalizado');
const gender = document.querySelector('#generos');

const divRight = document.querySelector('.right-content');
const name = document.querySelector('#name');
const lastname = document.querySelector('#lastname');
const phoneOrEmail = document.querySelector('#login');
const birthdate = document.querySelector('#aniversario');
const genderSelected = document.getElementsByName('gender');

// alert('funcionou);
buttonLogin.addEventListener('click', function alerta() {
  alert(`${emailOrPhone.value}`);
});

function selectedGender() {
  let genderChosen;
  for (let i = 0; i < genderSelected.length; i += 1) {
    if (genderSelected[i].checked) {
      genderChosen = genderSelected[i].value;
    }
  }
  return genderChosen;
}

function createInputForGender() {
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'gender-custom');
  newInput.setAttribute('placeholder', 'Gênero (opcional)');
  newInput.setAttribute('id', 'other-gender');
  gender.appendChild(newInput);
}

function validate() {
  event.preventDefault();
  const genero = selectedGender();
  const message = document.createElement('p');
  message.innerText = '';
  let campoInvalido = 0;
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      message.innerText = 'Campos inválidos';
      campoInvalido = 1;
    }
  }

  if (campoInvalido !== 1) {
    divRight.innerHTML = `Olá, ${name.value} ${lastname.value}!
    ${phoneOrEmail.value} ${birthdate.value} ${genero}`;
  } else {
    formRegister.appendChild(message);
  }
}

buttonRegister.addEventListener('click', validate);

customGender.addEventListener('click', createInputForGender);
