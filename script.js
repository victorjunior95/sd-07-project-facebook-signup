const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const emailInput = document.getElementById('user-email-phone');
  alert(emailInput.value);
});

const buttonRegister = document.getElementById('facebook-register');
const personal = document.getElementById('personal');
const form = document.getElementById('form');
buttonRegister.addEventListener('click', function () {
  event.preventDefault();
  const inputItems = document.getElementsByClassName('input-item');
  let counter = 0;
  for (let index = 0; index < inputItems.length; index += 1) {
    const result = inputItems[index];
    if (result.value === '') {
      counter += 1;
    }
  }
  const feminino = document.getElementById('feminino').checked;
  const masculino = document.getElementById('masculino').checked;
  const gen = ((feminino) === false && (masculino) === false && (personal.checked) === false);
  if (counter > 0 || gen === true) {
    const tagP = document.createElement('p');
    tagP.innerText = 'Campos inválidos';
    form.appendChild(tagP);
  }
});


const buttonBox = document.getElementById('button-box');
personal.addEventListener('click', function () {
  const newInput = document.createElement('input');
  form.insertBefore(newInput, buttonBox);
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
});
