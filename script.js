const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const emailInput = document.getElementById('user-email-phone');
  alert(emailInput.value);
});

const buttonRegister = document.getElementById('facebook-register');

buttonRegister.addEventListener('click', function () {
  event.preventDefault();
  const inputItems = document.getElementsByClassName('input-item');
  const counter = 0
  for (let index = 0; index < inputItems.length; index += 1) {
    const result = inputItems[index];
    if (result.value === '') {
      result.value = 'Campos inválidos';
      counter += 1
    }
  }
  const masculino = document.getElementById('masculino')
  if (counter > 1 || )
});

const personal = document.getElementById('personal');
const form = document.getElementById('form');
const buttonBox = document.getElementById('button-box');
personal.addEventListener('click', function () {
  const newInput = document.createElement('input');
  form.insertBefore(newInput, buttonBox);
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
});
