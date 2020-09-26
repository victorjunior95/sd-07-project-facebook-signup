const loginButton = document.querySelector('#button-login');
const loginInfo = document.querySelector('#user-email-phone');
const genderCustom = document.querySelector('#Personalizado');
const submitButton = document.querySelector('#facebook-register');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const phoneEmail = document.querySelector('#phone-email');
const password = document.querySelector('#password');
const birthDate = document.querySelector('#birth-date');

loginButton.addEventListener('click', () => {
  alert(loginInfo.value);
});

function validateAndReplace (){}

genderCustom.addEventListener('click', () => {
  const customInput = document.createElement('input');
  customInput.setAttribute('name', 'gender-custom');
  customInput.placeholder = 'Gênero (opcional)';
  document.querySelector('#custom').appendChild(customInput);
});

submitButton.addEventListener('click', validateAndReplace);