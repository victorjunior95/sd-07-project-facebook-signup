const loginButton = document.querySelector('#button-login');
const loginInfo = document.querySelector('#user-email-phone');

loginButton.addEventListener('click', function () {
  alert(loginInfo.value);
});
