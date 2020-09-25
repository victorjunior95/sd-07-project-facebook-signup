const btnLogin = document.getElementById('button-login');
const inputText = document.querySelector('#user-email-phone');

btnLogin.addEventListener('click', function () {
  alert(inputText.value);
});
