const button = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone');

button.addEventListener('click', function alertEmail() {
  alert(inputEmail.value);
});
