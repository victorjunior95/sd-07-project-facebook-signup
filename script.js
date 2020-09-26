const loginButton = document.querySelector('#button-login');
const loginInfo = document.querySelector('#user-email-phone');
const genderCustom = document.querySelector('#Personalizado');

loginButton.addEventListener('click', function () {
  alert(loginInfo.value);
});

genderCustom.addEventListener('click', () => {
  const customInput = document.createElement('input');
  customInput.setAttribute('name', 'gender-custom');
  customInput.placeholder = 'Gênero (opcional)';
  document.querySelector('#custom').appendChild(customInput);
});
