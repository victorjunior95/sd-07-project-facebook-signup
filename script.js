function alertEmailOrPhone() {
  const emailOrPhone = document.getElementById('user-email-phone');

  alert(emailOrPhone.value);
}

const genderCustom = document.querySelector('.gender-custom');

function createCustom() {
  genderCustom.innerHTML = '';
  const input = document.createElement('input');
  input.setAttribute('name', 'gender-custom');
  input.placeholder = 'Gênero (opcional)';
  genderCustom.appendChild(input);
}

const authenticationButton = document.getElementById('button-login');
const buttonRadio = document.querySelector('#personalizado');

authenticationButton.addEventListener('click', alertEmailOrPhone);

buttonRadio.addEventListener('change', createCustom);

const btnEnv = document.querySelector('#facebook-register');
const msg = document.createElement('p');
const centralForm = document.querySelector('.central-form');
centralForm.appendChild(msg);

function welcome(textOla) {
  const input = document.querySelectorAll('.right-content input');
  for (let i = 0; i < input.length; i += 1) {
    input[0].value = `Olá, ${textOla[0]}`;
    input[3].value = '';
  }
}

function adicionarText() {
  const textOla = [];
  const input = document.querySelectorAll('.right-content input');
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].getAttribute('type') !== 'password') {
      textOla.push(input[i].value);
    }
  }
  welcome(textOla);
}

function checkedRadio() {
  const radio = document.querySelectorAll('.gender-radio');
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked === true) {
      return 'true';
    }
  }
  msg.innerHTML = 'Campos inválidos';
  return 'false';
}

function checkedFields() {
  const inputField = document.querySelectorAll('.right-content input');
  for (let i = 0; i < inputField.length; i += 1) {
    if (inputField[i].value === '') {
      msg.innerText = 'Campos inválidos';
      return 'false';
    }
  }
  return 'true';
}

btnEnv.addEventListener('click', function (e) {
  e.preventDefault();

  if (checkedRadio() === 'true' && checkedFields() === 'true') {
    adicionarText();
  }
});
