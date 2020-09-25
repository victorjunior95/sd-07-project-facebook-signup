const btnLogin = document.getElementById('button-login');
const inputText = document.getElementById('user-email-phone-label');

btnLogin.addEventListener('click', function () {
  alert(inputText.value);
});
