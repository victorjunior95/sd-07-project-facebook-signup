const buttonLogin = document.querySelector('#button-login');
const emailOrPhone = document.querySelector('#user-email-phone');
const inputs = document.querySelectorAll('input');
const buttonRegister = document.querySelector('#facebook-register');
const formRegister = document.querySelector('#form-register');

// alert('funcionou);
buttonLogin.addEventListener('click', function alerta() {
  alert(`${emailOrPhone.value}`);
});

function validate() {
  event.preventDefault();
  const message = document.createElement('h1');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      message.innerText = 'Campos inválidos';
    }
  }
  formRegister.appendChild(message);
}

buttonRegister.addEventListener('click', validate);
