const botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function () {
  const emailTelefone = document.querySelector('#user-email-phone').value;
  alert(emailTelefone);
});

const customButton = document.querySelector('#custom-button');
customButton.addEventListener('change', function () {
  const divgender = document.querySelector('#gender-custom');
  divgender.remove.visibility = 'hidden';
  divgender.style.visibility = 'visible';
});

const registerButton = document.querySelector('#facebook-register');
registerButton.addEventListener('click', function () {
  const inputsFormRegister = document.querySelectorAll('.validation');
  const validationMsg = document.querySelector('#validation-msg');
  for (let index = 0; index < inputsFormRegister.length; index += 1) {
    if (inputsFormRegister[index].value === '') {
      validationMsg.innerText = 'Campos inválidos';
      validationMsg.style.color = 'red';
    }
  }
});
