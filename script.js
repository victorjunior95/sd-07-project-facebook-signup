const buttonLogin = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
// const userFirstName = document.querySelector('.user-create-first');
// const userLastName = document.querySelector('.user-create-last');
// const phoneNumberUser = document.querySelector('.user-phone');
// const newPassword = document.querySelector('.user-new-password');
// const birthDate = document.querySelector('.user-birthdate');
// const genders = document.querySelector('.genders');
// const customGenderText = document.querySelector('#custom-gender-text');
const registerFB = document.querySelector('#facebook-register');
// const tagFormCreate = document.querySelector('.user-create');
const inputFormCreate = document.querySelectorAll('.create-form');

buttonLogin.addEventListener('click', function () {
  alert(emailInput.value);
});

// https://stackoverflow.com/questions/24391078/how-to-change-the-default-message-of-the-required-field-in-the-popover-of-form-c/24392931
// https://stackoverflow.com/questions/5272433/html5-form-required-attribute-set-custom-validation-message

function checkIfAllFieldsAreFilled() {
  inputFormCreate.forEach((element) => {
    element.setCustomValidity('');
    if (element.validity.valid === false || element.value === '') {
      element.setCustomValidity('Campos inválidos');
    } else {
      element.setCustomValidity('');
    }
  });
}
registerFB.addEventListener('click', function () {
  checkIfAllFieldsAreFilled();
});
