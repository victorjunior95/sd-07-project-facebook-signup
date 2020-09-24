const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(document.querySelector('#user-email-phone').value);
});


function validateForm(){
  let isValid = true;
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const phoneEmail = document.querySelector('#phone-email');
  const password = document.querySelector('#password');
  const birthdate = document.querySelector('#birthdate');
  const masculine = document.querySelector('#masculine');
  const feminine = document.querySelector('#feminine');
  const custom = document.querySelector('#custom');
  if ((firstName.value !== '') || (lastName.value !== '') || (phoneEmail.value !== '') ) {
    if ((birthdate.value!== '') || (password.value !== '') ) {
      isValid = true;
    } else {
      isValid = false;
    }
  } else {
    isValid = false;
  }
  return isValid
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
