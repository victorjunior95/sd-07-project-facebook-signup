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
const ContainerPersonalizado = document.querySelector('#container-personalizado');
function getGender() {
  let gender = '';
  if (radioFeminino.checked) {
    gender = 'Feminino';
  } else if (radioMasculino.checked) {
    gender = 'Masculino';
  } else if (radioPersonalizado.checked) {
    gender = 'Personalizado';
  }
  return gender;
}

const btnCadastro = document.getElementById('facebook-register');
btnCadastro.addEventListener('click', function () {
  event.preventDefault();

  const pessoa = {
    inputFirstname: inputFirstname.value,
    inputLastname: inputLastname.value,
    inputPhoneEmail: inputPhoneEmail.value,
    inputPassword: inputPassword.value,
    inputDataNascimento: inputDataNascimento.value,
    gender: getGender(),
  };
  if (
    pessoa.inputFirstname === '' ||
    pessoa.inputLastname === '' ||
    pessoa.inputPhoneEmail === '' ||
    pessoa.inputPassword === '' ||
    pessoa.inputDataNascimento === ''
  ) {
    campoInvalido.innerHTML = 'Campos inválidos';
  } else {
    document.querySelector(
      '.right-content',
    ).innerHTML = `<p>Olá, ${pessoa.inputFirstname} ${pessoa.inputLastname}</p>
    <p>${pessoa.inputPhoneEmail}</p>
    <p>${pessoa.inputDataNascimento}</p>
    <p>${pessoa.gender}</p>`;
  }
});

radioPersonalizado.addEventListener('click', function () {
  const ElementInput = document.createElement('input');
  ElementInput.setAttribute('name', 'gender-custom');
  ElementInput.setAttribute('placeholder', 'Gênero (opcional)');
  ContainerPersonalizado.appendChild(ElementInput);
});
