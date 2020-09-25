const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(document.querySelector('#user-email-phone').value);
});

function validateRadios() {
  const radioGroup = document.querySelector('.genders').children;
  let validRadio = true;
  for (let index = 0; index < radioGroup.index; index += 1) {
    if (radioGroup[index].checked === false) {
      validRadio = false;
    }
  }
  return validRadio;
}

function validateName() {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  let isValid = true;
  if ((firstName.value === '') || (lastName.value === '')){
    isValid = false;
  }
  return isValid;
}

function validateOthers() {
  const phoneEmail = document.querySelector('#phone-email');
  const password = document.querySelector('#password');
  const birthdate = document.querySelector('#birthdate');
  let isValid = true;
  if ((phoneEmail.value === '') || (birthdate.value === '') || (password.value === '')) {
    isValid = false;
  }
  return isValid;
}

function validateForm() {
  let isValid = true;  

  if ((validateName()) || (validateOthers()) || (validateRadios())) {
    isValid = false;
  } else {
    isValid = true;
  }
  return isValid;
}

const buttonRegister = document.querySelector('#facebook-register');

buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const submitError = document.querySelector('#submit-error');
  submitError.innerText = '';
  if (!validateForm()) {
    submitError.innerText = 'Campos inválidos';
  }
});
