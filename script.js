const user = document.querySelector('#user-email-phone');
const button = document.querySelector('#button-login');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const phoneEmail = document.querySelector('#phone-email');
const password = document.querySelector('#password');
const birthdate = document.querySelector('#birthdate');
const female = document.querySelector('#female');
const male = document.querySelector('#male');
const other = document.querySelector('#other');
const facebookRegister = document.querySelector('#facebook-register');

button.addEventListener('click', function () {
  alert(user.value);
});

facebookRegister.addEventListener('click', function () {
  let check = false;
  const array = [firstname, lastname, phoneEmail, password, birthdate];
  const arrayGender = [female, male, other];
  for (let index = 0; index < arrayGender.length; index += 1) {
    if (arrayGender[index].checked === true) {
      check = true;
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].value.length === 0) {
      check = false;
    }
  }
  if (check === false) {
    alert('Campos inválidos');
  }
});
