const button = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const buttonOption = document.querySelectorAll('input[name="gender"]');
const genderOptions = document.querySelector('.gender-options');

button.addEventListener('click', function () {
  const inputValue = emailInput.value;
  alert(inputValue);
});

buttonOption[2].addEventListener('focusin', function () {
  const customInput = document.createElement('input');
  customInput.type = 'text';
  customInput.placeholder = 'Gênero (opcional)';
  genderOptions.appendChild(customInput);
});

buttonOption[2].addEventListener('focusout', function () {
  genderOptions.removeChild(genderOptions.lastChild);
});
