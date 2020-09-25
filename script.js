const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function (event) {
  if (userEmailPhone.value === '') {
    event.preventDefault();
  } else {
    alert(userEmailPhone.value);
  }
});

const buttonRegister = document.getElementById('facebook-register');
const firstname = document.getElementById('firstname').value;
const lastname = document.getElementById('lastname').value;
const phoneEmail = document.getElementById('phone-email').value;
const password = document.getElementById('password').value;
const birthdate = document.getElementById('birthdate').value;
// const gender = document.getElementsByClassName('radio');  identificar qual index eu selecionei

buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const error = document.querySelector('.error-form');
  const values = [firstname, lastname, phoneEmail, password, birthdate];
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') {
      error.style.display = 'initial';
    }
  }
});

const classesRadioButtons = document.querySelectorAll('.radio');

for (let index = 0; index < classesRadioButtons.length; index += 1) {
  classesRadioButtons[index].addEventListener('click', function (event) {
    const genderCustom = document.querySelector('.gender-custom');
    if (event.target.id === 'Personalizado') {
      genderCustom.style.display = 'initial';
    } else {
      genderCustom.style.display = 'none';
    }
  });
}
