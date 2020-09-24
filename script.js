const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const nameInput = document.getElementById('user-email-phone').value;
  alert(`${nameInput}`);
});
