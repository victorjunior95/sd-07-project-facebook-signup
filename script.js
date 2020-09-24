const buttonLogin = document.querySelector('#button-login');
const input = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(input.value);
});

//----------------------------------------------------------------
function verificaRadio() {
  const radios = document.querySelectorAll('.radio');

  if (
    radios[0].checked === false &&
    radios[1].checked === false &&
    radios[2].checked === false
  ) {
    p.innerHTML = 'Campos inválidos';
  }
}

const p = document.createElement('p');
const mainForm = document.querySelector('.main-form');
mainForm.appendChild(p);

const buttonRegister = document.querySelector('#facebook-register');
buttonRegister.addEventListener('click', function () {
  const inputs = document.querySelectorAll('.main-form input');
  const radios = document.querySelectorAll('.radio');

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      p.innerHTML = 'Campos inválidos';
      break;
    }
  }
  verificaRadio();
});
