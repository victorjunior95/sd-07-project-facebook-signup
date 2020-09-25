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

const inputField = document.querySelectorAll('input');
const btnEnv = document.querySelector('#facebook-register');
const msg = document.createElement('p');
const centralForm = document.querySelector('.central-form');
centralForm.appendChild(msg);

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

btnEnv.addEventListener('click', function (e) {
  e.preventDefault();
  for (let i = 0; i < inputField.length; i += 1) {
    if (inputField[i].value === '') {
      msg.innerText = 'Campos inválidos';
      break;
    }
  }
  checkedRadio();
});
