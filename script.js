const buttonLogin = document.querySelector('#button-login');
const emailValidation = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(emailValidation.value);
});
