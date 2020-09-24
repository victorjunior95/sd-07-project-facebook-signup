const button = document.querySelector('#button-login');
const input = document.querySelector('#user-email-phone');

button.addEventListener('click', function () {
  alert(input.value);
});
