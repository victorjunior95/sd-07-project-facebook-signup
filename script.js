const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const emailTel = document.getElementById('user-email-phone').value;
  window.alert(emailTel);
});

function createTextField() {
  const newField = document.createElement('input');
  const genreOpcional = document.querySelector('#genre-opcional');
  newField.type = 'text';
  newField.name = 'gender-custom';
  newField.placeholder = 'Gênero (opcional)';
  if (genreOpcional.firstChild === null) {
    genreOpcional.appendChild(newField);
  }
}

const buttonCustom = document.getElementById('custom');
buttonCustom.addEventListener('click', createTextField);

function deleteInput() {
  const genreOpcional = document.querySelector('#genre-opcional');
  if (genreOpcional.lastChild !== null) {
    genreOpcional.lastChild.remove();
  }
}

const btFemale = document.getElementById('female');
btFemale.addEventListener('click', deleteInput);

const btMale = document.getElementById('male');
btMale.addEventListener('click', deleteInput);

document.getElementById('facebook-register').addEventListener('click', function (event) {
  event.preventDefault();
  const errorMessage = document.getElementById('error-message');
  if (document.getElementById('firstname').value === '') {
    errorMessage.textContent = 'Campos Inválidos';
  }
  if (document.getElementById('lastname').value === '') {
    errorMessage.textContent = 'Campos Inválidos';
  }
  if (document.getElementById('phone_email').value === '') {
    errorMessage.textContent = 'Campos Inválidos';
  }
  if (document.getElementById('password').value === '') {
    errorMessage.textContent = 'Campos Inválidos';
  }
  if (document.getElementById('birthdate').value === '') {
    errorMessage.textContent = 'Campos Inválidos';
  }
  if (btFemale.checked === false && btMale.checked === false && buttonCustom.checked === false) {
    errorMessage.textContent = 'Campos Inválidos';
  } else {
    errorMessage.textContent = '';
  }
});
