const button = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const buttonOption = document.querySelectorAll('input[name="gender"]');
const genderOptions = document.querySelector('.gender-options');

button.addEventListener('click', function () {
  const inputValue = emailInput.value;
  alert(inputValue);
});

for (let index = 0; index < buttonOption.length; index += 1) {
  buttonOption[index].addEventListener('change', function () {
    if (buttonOption[index].value === 'personalizado') {
      const customInput = document.createElement('input');
      customInput.type = 'text';
      customInput.placeholder = 'Gênero (opcional)';
      genderOptions.appendChild(customInput);
    } else {
      genderOptions.removeChild(genderOptions.lastChild);
    }
  });
}
