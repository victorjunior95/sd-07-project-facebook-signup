const validationFirstName = document.querySelector('#first-name');
validationFirstName.setCustomValidity('Campos inválidos');
const validationLastName = document.querySelector('#last-name');
validationLastName.setCustomValidity('Campos inválidos');
const validationPhoneMail = document.querySelector('#phone-email');
validationPhoneMail.setCustomValidity('Campos inválidos');
const validationPassword = document.querySelector('#password');
validationPassword.setCustomValidity('Campos inválidos');
const validationBirthdate = document.querySelector('#birthdate');
validationBirthdate.setCustomValidity('Campos inválidos');

const alertButton = document.querySelector('#button-login');
alertButton.addEventListener('click', function (event) {
  event.preventDefault();
  const flash = document.querySelector('#user-email-phone').value;
  alert(flash);
});

const addCustomGender = document.querySelector('#custom');
addCustomGender.addEventListener('click', function () {
  if (document.querySelector('.setup-gender').lastElementChild.id !== 'custom-gender') {
    const customGenderInput = document.createElement('input');
    customGenderInput.type = 'text';
    customGenderInput.name = 'gender-custom';
    customGenderInput.id = 'custom-gender';
    customGenderInput.placeholder = 'Gênero (opcional)';
    const containerGender = document.querySelector('.setup-gender');
    containerGender.appendChild(customGenderInput);
  }
});
