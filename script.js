const btLogin = document.querySelector('#button-login');

btLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone').value;
  alert(login);
});
