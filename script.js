const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(user.value);
});

