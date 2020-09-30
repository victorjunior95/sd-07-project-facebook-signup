const loginBtn = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const submitButton = document.querySelector('#facebook-register');
const fisrtName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const phoneEmail = document.querySelector('#phoneEmail');
const password = document.querySelector('#password');
const birthDate = document.querySelector('#birthdate');
let textChecked = true;

const inputTextsValidation = () => {
  if (fisrtName.value === '' || lastName.value === '') {
    textChecked = false;
  }

  if (phoneEmail.value === '' || password.value === '' || birthDate.value === '') {
    textChecked = false;
  }
  return textChecked;
};

const femaleRadio = document.querySelector('#female');
const maleRadio = document.querySelector('#male');
const otherRadio = document.querySelector('#other');
let radioChecked = false;

const inputRadioValidation = () => {
  if (femaleRadio.checked || maleRadio.checked || otherRadio.checked) {
    radioChecked = true;
  }
  return radioChecked;
};

const otherGender = document.querySelector('#otherGender');

const validateForm = () => {
  event.preventDefault();
  inputTextsValidation();
  inputRadioValidation();

  const errorMessage = document.querySelector('#errorMessage');
  const mainContent = document.querySelector('#right-content');
  const genderChoose = document.querySelector('[type=radio]:checked');

  if (textChecked && radioChecked) {
    mainContent.innerHTML = `Olá, ${fisrtName.value} ${lastName.value}
    ${phoneEmail.value}
    ${birthDate.value}
    ${genderChoose.value}`;
  } else {
    errorMessage.innerText = 'Campos inválidos';
  } 
};

window.onload = function () {
  loginBtn.addEventListener('click', () => alert(userEmailPhone.value));
  submitButton.addEventListener('click', validateForm);
  otherRadio.addEventListener('change', () => {
    if (otherRadio.checked) {
      otherGender.style.display = 'block';
    } else {
      otherGender.style.display = 'none';
    }
  });
};