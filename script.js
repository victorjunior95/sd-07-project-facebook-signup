const buttonLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(user.value);
});
