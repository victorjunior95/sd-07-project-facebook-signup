const buttonLogin = document.querySelector('#button-login');
const emailOrPhone = document.querySelector('#user-email-phone');
// alert('funcionou);
buttonLogin.addEventListener('click', function alerta() {
  alert(`${emailOrPhone.value}`);
});
