const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const emailTel = document.getElementById('user-email-phone').value;
  window.alert(emailTel);
});
