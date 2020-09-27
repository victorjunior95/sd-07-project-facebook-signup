const button = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const custom = document.querySelector('#personalizado');
const genderOptions = document.querySelector('.gender-options');

button.addEventListener('click', function () {
  const inputValue = emailInput.value;
  alert(inputValue);
});

custom.addEventListener('focus', function () {
  if (genderOptions.childElementCount <= 8) {
    const customInput = document.createElement('input');
    customInput.type = 'text';
    customInput.placeholder = 'Gênero(opcional)';
    genderOptions.appendChild(customInput);
  }
});

// custom.addEventListener('focusout', function () {
//   if (genderOptions.childElementCount > 8) {
//     genderOptions.removeChild(customInput);
//   }
// });
