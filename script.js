const botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function () {
  const emailTelefone = document.querySelector('#user-email-phone').value;
  alert(emailTelefone);
});
/* const dayButton = document.querySelector('#day');
const monthButton = document.querySelector('#month');
const yearButton = document.querySelector('#year');

for (let indexDay = 1; indexDay <= 31; indexDay += 1) {
  const optionDay = document.createElement('option');
  optionDay.setAttribute('value', indexDay);
  optionDay.innerText = indexDay;
  dayButton.appendChild(optionDay);
}

for (let indexMonth = 1; indexMonth <= 12; indexMonth += 1) {
  const optionMonth = document.createElement('option');
  optionMonth.setAttribute('value', indexMonth);
  optionMonth.innerText = indexMonth;
  monthButton.appendChild(optionMonth);
}

for (let indexYear = 2020; indexYear >= 1905; indexYear -= 1) {
  const optionYear = document.createElement('option');
  optionYear.setAttribute('value', indexYear);
  optionYear.innerText = indexYear;
  yearButton.appendChild(optionYear);
}

const customButton = document.querySelector('#custom-button');
const genderOptions = document.querySelectorAll('.gender-options')[0];
const customInput = document.querySelector('#custom-input')
customButton.addEventListener('change', function () {
  customInput.removeAttribute('type', 'hidden');
  customInput.setAttribute('type', 'text');
  genderOptions.appendChild(customInput);
}); */

const customButton = document.querySelector('#custom-button');
customButton.addEventListener('change', function () {
  const registerForm = document.querySelector('.form-singup');
  const inputCustom = document.createElement('input');
  inputCustom.setAttribute('type', 'text');
  inputCustom.setAttribute('placeholder', 'Gênero (opcional)');
  inputCustom.setAttribute('name', 'gender');
  registerForm.appendChild(inputCustom);
});

/*
const buttonSubmit = document.querySelector('#facebook-register');
buttonSubmit.addEventListener('click', () => {
  const inputsValidation = document.getElementsByClassName('form-singup');
  console.log(inputsValidation);
  for (let index = 0; index < inputsValidation.length; index += 1) {
    inputsValidation[index].oninvalid = function () {
      this.setCustomValidity('');
      if (!this.validity.valid) {
        this.setCustomValidity('Campos inválidos');
      }
    };
  }
}); 
const buttonSubmit = document.querySelector('#facebook-register');
buttonSubmit.addEventListener('click', function() {
  let formInputs = document.getElementsByTagName('input');
  console.log(formInputs);
  for (let index = 0; index < formInputs.length; index += 1) {
      formInputs[index].oninvalid = function(event) {
          event.target.setCustomValidity('');
          if (!event.target.validity.valid) {
              event.target.setCustomValidity('Campos inválidos');
          }
      };
      formInputs[index].oninput = function(event) {
          event.target.setCustomValidity('');
      };
  }
}); */
