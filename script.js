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
const campoInvalido = document.getElementById('campo-invalido');

const btnCadastro = document.getElementById('facebook-register');
btnCadastro.addEventListener('click', function () {
  event.preventDefault();

  if (inputFirstname.value === '') {
    campoInvalido.innerHTML = 'campos inválidos';
  } else if (inputLastname.value === '') {
    campoInvalido.innerHTML = 'campos inválidos';
  } else if (inputPhoneEmail.value === '') {
    campoInvalido.innerHTML = 'campos inválidos';
  } else if (inputPassword.value === '') {
    campoInvalido.innerHTML = 'campos inválidos';
  } else if (inputDataNascimento.value === '') {
    campoInvalido.innerHTML = 'campos inválidos';
  } else if (
    radioFeminino.checked === false &&
    radioMasculino.checked === false &&
    radioPersonalizado.checked === false
  ) {
    campoInvalido.innerHTML = 'campos inválidos';
  }
});
