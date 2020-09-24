const btnLogin = document.querySelector('#button-login');

btnLogin.addEventListener('click', () => {
  const emailValue = document.querySelector('#user-email-phone');
  alert(emailValue.value);
});
