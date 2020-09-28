const button = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const buttonOption = document.querySelectorAll('input[name="gender"]');
const genderOptions = document.querySelector('.gender-options');
const signUpButton = document.querySelector('#facebook-register');

button.addEventListener('click', function () {
  const inputValue = emailInput.value;
  alert(inputValue);
});

for (let index = 0; index < buttonOption.length; index += 1) {
  buttonOption[index].addEventListener('change', function () {
    if (buttonOption[index].value === 'Personalizado') {
      const customInput = document.createElement('input');
      customInput.type = 'text';
      customInput.placeholder = 'Gênero (opcional)';
      customInput.name = 'gender-custom';
      customInput.classList.add('form-input');
      genderOptions.appendChild(customInput);
    } else {
      genderOptions.removeChild(genderOptions.lastChild);
    }
  });
}

signUpButton.addEventListener('click', function () {
  const forms = document.querySelectorAll('.form-input');


  // Funcao validar campos
//   for (let index = 0; index < forms.length; index += 1) {
//     if (forms[index].value === '') {
//       const invalidField = document.createElement('div');

//       invalidField.innerHTML = 'Campos inválidos';

//       forms

//       // alert('Campos inválidos');
//     }
//   }
// });
