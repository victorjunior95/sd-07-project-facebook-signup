const buttonLogin = document.querySelector('#button-login');
const emailOrTel = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(emailOrTel.value);
});
