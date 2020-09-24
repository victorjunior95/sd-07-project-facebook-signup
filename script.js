const loginButton = document.getElementById('button-login');

loginButton.addEventListener('click', function () {
  const emailOrTel = document.getElementById('user-email-phone');
  alert(emailOrTel.value);
});
