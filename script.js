const button = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');

button.addEventListener('click', function () {
  const inputValue = emailInput.value;
  alert(inputValue);
});
