const buttonLogin = document.querySelector('#button-login');
const emailOrTel = document.querySelector('#user-email-phone');
const signupInputs = document.querySelectorAll('#signup-form input');
const signupForm = document.querySelector('#signup-form');
const registerButton = document.querySelector('#facebook-register');
const customRadio = document.querySelector('#custom');
const femaleRadio = document.querySelector('#female');
const maleRadio = document.querySelector('#male');
const genderContainer = document.querySelector('.gender-container');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(emailOrTel.value);
});

function chooseGender() {
  let gender = 'Personalizado';
  if (femaleRadio.checked === true) {
    gender = 'Feminino';
  } else if (maleRadio.checked === true) {
    gender = 'Masculino';
  }
  return gender;
}

function welcome() {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `Olá, ${signupInputs[0].value} ${signupInputs[1].value} <br>${signupInputs[2].value} <br>${signupInputs[4].value}<br>${chooseGender()}`;
}

registerButton.addEventListener('click', function (event) {
  let valid = true;
  event.preventDefault();
  signupInputs.forEach((element) => {
    if (element.value === '') {
      valid = false;
    }
  });
  if (valid === false) {
    signupForm.innerHTML = 'Campos inválidos';
  } else {
    welcome();
  }
});

customRadio.addEventListener('click', function () {
  const customInput = document.createElement('input');
  customInput.type = 'text';
  customInput.name = 'gender-custom';
  customInput.placeholder = 'Gênero(opcional)';
  genderContainer.appendChild(customInput);
});
