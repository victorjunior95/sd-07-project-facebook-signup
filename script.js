const buttonLogin = document.getElementById('button-login');
const inputValue = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(inputValue.value);
});
