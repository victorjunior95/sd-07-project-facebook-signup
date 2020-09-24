const buttonLog = document.querySelector('#button-login');

buttonLog.addEventListener('click', function alertMensagem() {
  const emailOrFone = document.getElementById('user-email-phone');
  alert(emailOrFone.value);
});
