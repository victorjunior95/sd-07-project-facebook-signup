const inputUserEmailPhone = document.getElementById('user-email-phone');
const btn = document.getElementById('button-login');
btn.addEventListener('click', () => {
  alert(inputUserEmailPhone.value);
});

const inputFirstname = document.getElementById('firstname');
const inputLastname = document.getElementById('lastname');
const inputPhoneEmail = document.getElementById('phone_email');
const inputPassword = document.getElementById('password');
const inputDataNascimento = document.getElementById('data-nascimento');
const radioFeminino = document.getElementById('female');
const radioMasculino = document.getElementById('male');
const radioPersonalizado = document.getElementById('other');
const labelGender = document.getElementById('label-gender');
const labelLabelBirthdate = document.getElementById('label-birthdate');

const btnCadastro = document.getElementById('facebook-register');
btnCadastro.addEventListener('click', function () {
  event.preventDefault();

  if (inputFirstname.value === '') {
    inputFirstname.value = 'campos inválidos';
  }
  if (inputLastname.value === '') {
    inputLastname.value = 'campos inválidos';
  }
  if (inputPhoneEmail.value === '') {
    inputPhoneEmail.value = 'campos inválidos';
  }
  if (inputPassword.value === '') {
    inputPassword.value = 'campos inválidos';
  }
  if (inputDataNascimento.value === '') {
    labelLabelBirthdate.innerHTML = 'campos inválidos';
  }

  if (
    radioFeminino.checked === false &&
    radioMasculino.checked === false &&
    radioPersonalizado.checked === false
  ) {
    labelGender.innerHTML = 'campos inválidos';
  }
});
