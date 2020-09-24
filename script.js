const buttonLogin = document.querySelector('#button-login');
const input = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(input.value);
});

const buttonRegister = document.querySelector('#facebook-register');
buttonRegister.addEventListener('click', function () {
  let inputs = document.querySelectorAll('.main-form input');
});
