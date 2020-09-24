const buttonLogin = document.getElementById('button-login');
const userData = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(userData.value);
});
