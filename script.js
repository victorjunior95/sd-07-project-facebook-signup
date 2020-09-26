const buttonLogin = document.querySelector('#button-login');
const emailOrTel = document.querySelector('#user-email-phone');
const signupInputs = document.querySelectorAll('#signup-form input');
const signupForm = document.querySelector('#signup-form');
const registerButton = document.querySelector('#facebook-register');

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
    const message = document.createTextNode('Campos inválidos');
    signupForm.insertBefore(message, signupForm.childNodes[0]);
  }
});
