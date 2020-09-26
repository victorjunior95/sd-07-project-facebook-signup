const buttonLogin = document.getElementById('button-login');
const emailInput = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  alert(`${emailInput.value}`);
});
