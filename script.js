const buttonLogin = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(emailInput.value);
});
