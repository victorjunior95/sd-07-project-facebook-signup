// função para retornar o input email ou telefone quando clicar no botão entrar

function alertEmailOrPhone() {
  const emailOrPhone = document.getElementById('user-email-phone');

  alert(emailOrPhone.value);
}

const authenticationButton = document.getElementById('button-login');

authenticationButton.addEventListener('click', alertEmailOrPhone);

// função para quando selecionar a opção de gênero personalizado, criar um input para descrição

function createCustom() {
  const genderCustom = document.querySelector('.gender-custom');
  genderCustom.innerHTML = '';

  const input = document.createElement('input');
  input.setAttribute('name', 'gender-custom');
  input.placeholder = 'Gênero (opcional)';
  genderCustom.appendChild(input);
}

const buttonRadio = document.querySelector('#personalizado');

buttonRadio.addEventListener('change', createCustom);

// função para validar campos do registro e retornar dados caso esteja tudo validado

const msg = document.createElement('p');
const centralForm = document.querySelector('.central-form');
centralForm.appendChild(msg);

function welcome(fields) {
  const rightContent = document.getElementsByClassName('right-content')[0];

  rightContent.innerHTML = `<p>Olá, ${fields.firstname} ${fields.lastname}</p>`;
  rightContent.innerHTML += `<p>${fields.phoneEmail}</p>`;
  rightContent.innerHTML += `<p>${fields.birthdate}</p>`;
  rightContent.innerHTML += `<p>${fields.radioSelected}</p>`;
}

function checkedRadio() {
  const radio = document.querySelectorAll('.gender-radio');
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked === true) {
      return radio[i].value;
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

const submit = document.querySelector('#facebook-register');

submit.addEventListener('click', function (event) {
  event.preventDefault();

  const firstname = document.querySelector('.firstname').value;
  const lastname = document.querySelector('.lastname').value;
  const phoneEmail = document.querySelector('.phone_email').value;
  const birthdate = document.querySelector('.birthdate').value;
  const radioSelected = checkedRadio();

  if (radioSelected !== 'false' && checkedFields() === 'true') {
    welcome({ firstname, lastname, phoneEmail, birthdate, radioSelected });
  }
});
