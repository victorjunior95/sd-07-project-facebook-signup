const button = document.querySelector('#button-login');

button.addEventListener('click', function () {
  const user = document.querySelector('#user-email-phone');
  alert(user.value);
});

function checarSexo() {
  const female = document.querySelector('#female');
  const male = document.querySelector('#male');
  const other = document.querySelector('#other');
  const arrayGender = [female, male, other];
  for (let index = 0; index < arrayGender.length; index += 1) {
    if (arrayGender[index].checked === true) {
      gender = arrayGender[index].value;
      return true;
    }
  }
  return false;
}

function checarCampos() {
  const firstname = document.querySelector('#firstname');
  const lastname = document.querySelector('#lastname');
  const password = document.querySelector('#password');
  const birthdate = document.querySelector('#birthdate');
  const array = [firstname, lastname, phoneEmail, password, birthdate];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].value.length === 0) return false;
  }
  return true;
}

const phoneEmail = document.querySelector('#phone-email');
const facebookRegister = document.querySelector('#facebook-register');
let gender = '';

facebookRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const answer = document.querySelector('.answer');
  if (checarSexo() && checarCampos()) {
    console.log(firstname);
    console.log(phoneEmail);
    const welcome = document.querySelector('#welcome');
    welcome.innerHTML = `Olá, ${firstname.value} ${lastname.value}<br>
    ${phoneEmail.value} ${birthdate.value}<br>
    ${gender}`;
  } else {
    answer.style.display = 'block';
  }
});

other.addEventListener('click', function () {
  const custom = document.querySelector('#gender-custom');
  custom.disabled = false;
});
