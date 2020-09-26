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

const btCustom = document.getElementById('custom');
btCustom.addEventListener('click', createTextField);

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
    errorMessage.textContent = 'Campos inválidos';
  } else if (document.getElementById('lastname').value === '') {
    errorMessage.textContent = 'Campos inválidos';
  } else if (document.getElementById('phone_email').value === '') {
    errorMessage.textContent = 'Campos inválidos';
  } else if (document.getElementById('password').value === '') {
    errorMessage.textContent = 'Campos inválidos';
  } else if (document.getElementById('birthdate').value === '') {
    errorMessage.textContent = 'Campos inválidos';
  } else if (btFemale.checked === false && btMale.checked === false && btCustom.checked === false) {
    errorMessage.textContent = 'Campos inválidos';
  } else {
    errorMessage.textContent = '';
  }
});
