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
  inputCustom.setAttribute('placeholder', 'Gênero (opcional)');
  inputCustom.setAttribute('name', 'gender-custom');
  registerForm.appendChild(inputCustom);
  console.log(registerForm)
});
