const buttonLogin = document.querySelector('#button-login');
const emailOrTel = document.querySelector('#user-email-phone');
const signupInputs = document.querySelectorAll('#signup-form input');
const signupForm = document.querySelector('#signup-form');
const registerButton = document.querySelector('#facebook-register');
const customRadio = document.querySelector('#custom');
const genderContainer = document.querySelector('.gender-container');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(emailOrTel.value);
});

registerButton.addEventListener('click', function () {
  let valid = true;
  signupInputs.forEach((element) => {
    if (element.value === '') {
      valid = false;
    }
  });
  if (valid === false) {
    signupForm.innerHTML = 'Campos inválidos';
  }
});

customRadio.addEventListener('click', function () {
  const customInput = document.createElement('input');
  customInput.type = 'text';
  customInput.name = 'gender-custom';
  customInput.placeholder = 'Gênero(opcional)';
  genderContainer.appendChild(customInput);
});
