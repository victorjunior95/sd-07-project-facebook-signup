const buttonLogin = document.querySelector('#button-login');
const emailOrPhone = document.querySelector('#user-email-phone');
const inputs = document.querySelectorAll('input');
const buttonRegister = document.querySelector('#facebook-register');
const formRegister = document.querySelector('#form-register');
const customGender = document.querySelector('#personalizado');
const gender = document.querySelector('#generos');
const divRight = document.querySelector('.right-content');
const name = document.querySelector('#name');
const lastname = document.querySelector('#lastname');
const phoneOrEmail = document.querySelector('#login');
const birthdate = document.querySelector('input[type="date"]');
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

function formatDate() {
  const correctBirthdate = birthdate.value.split('-');
  const inputBirthdate = `${correctBirthdate[2]}/${correctBirthdate[1]}/${correctBirthdate[0]}`;
  return inputBirthdate;
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
  const message = document.createElement('h1');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      message.innerText = 'Campos inválidos';
    }
  }
  formRegister.appendChild(message);
  return true;
}

function includeData() {
  const emptyInputs = validate();
  const nascimento = formatDate();
  const genero = selectedGender();
  if (!emptyInputs) {
    divRight.innerHTML = `Olá, ${name.value} ${lastname.value}!
    ${phoneOrEmail.value} ${nascimento} ${genero}`;
  }
}

buttonRegister.addEventListener('click', includeData);

customGender.addEventListener('click', createInputForGender);
