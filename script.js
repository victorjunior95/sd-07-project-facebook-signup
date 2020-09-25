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
const answer = document.querySelector('.answer');

button.addEventListener('click', function () {
  alert(user.value);
});

facebookRegister.addEventListener('click', function () {
  event.preventDefault();
  let check = false;
  let gender = '';
  const array = [firstname, lastname, phoneEmail, password, birthdate];
  const arrayGender = [female, male, other];
  for (let index = 0; index < arrayGender.length; index += 1) {
    if (arrayGender[index].checked === true) {
      check = true;
      gender = arrayGender[index].value;
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].value.length === 0) check = false;
  }
  if (check === false) {
    answer.style.display = 'block';
  } else {
    const welcome = document.querySelector('#welcome');
    welcome.innerHTML = `Olá, ${firstname.value} ${lastname.value}<br>
    ${phoneEmail.value} ${birthdate.value}<br>
    ${gender}`;
  }
});

other.addEventListener('click', function () {
  const custom = document.querySelector('#gender-custom');
  custom.disabled = false;
});
