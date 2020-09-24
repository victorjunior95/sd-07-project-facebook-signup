const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(user.value);
});

const radioCustomGender = document.getElementsByName('gender')[2];
radioCustomGender.addEventListener('click', function () {
  const newAccForm = document.querySelector('.new-account');
  const genderCustom = document.createElement('input');
  genderCustom.type = 'text';
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';
  newAccForm.appendChild(genderCustom);
  newAccForm.insertBefore(genderCustom, newAccForm.children[19]);
});


const inputFirstName = document.getElementsByName('firstname')[0];
const inputLastName = document.getElementsByName('lastname')[0];
const inputPhoneEmail = document.getElementsByName('phone_email')[0];
const inputPassword = document.getElementsByName('password')[0];
const inputBirthdate = document.getElementsByName('birthdate')[0];
const inputGender = document.getElementsByName('gender');
const btnSignUp = document.querySelector('#facebook-register');

function compararValor() {
  let alert = false;

  if (inputFirstName.value === null) {
    alert = true;
  }

  if (inputLastName.value === null) {
    alert = true;
  }

  if (inputPhoneEmail.value === null) {
    alert = true;
  }

  return alert;
}

function compararValor2() {
  let alert = false;

  if (inputPassword.value === null) {
    alert = true;
  }

  if (inputBirthdate.value === null) {
    alert = true;
  }

  return alert;
}

function compararValor3() {
  let alert = false;

  let genderChecked = false;
  if (inputGender[0].checked || inputGender[1].checked || inputGender[2].checked) {
    genderChecked = true;
  }

  if (genderChecked === false) {
    alert = true;
  }

  return alert;
}

function alerta() {
  if (compararValor() || compararValor2() || compararValor3()) {
    alert('Campos inválidos');
  }
}

btnSignUp.addEventListener('click', alerta);
