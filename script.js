const botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function () {
  const emailTelefone = document.querySelector('#user-email-phone').value;
  alert(emailTelefone);
});

const customButton = document.querySelector('#custom-button');
customButton.addEventListener('change', function () {
  const registerForm = document.querySelector('.form-singup');
  const inputCustom = document.createElement('input');
  inputCustom.setAttribute('type', 'text');
  inputCustom.setAttribute('name', 'gender');
  inputCustom.setAttribute('placeholder', 'Gênero (opcional)');
  registerForm.appendChild(inputCustom);
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
