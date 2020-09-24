const buttonLogin = document.getElementById('button-login');
const userPmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(userPmailPhone.value);
});
