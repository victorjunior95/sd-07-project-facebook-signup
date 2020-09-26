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
