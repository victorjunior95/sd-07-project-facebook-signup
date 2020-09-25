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

const buttonFemale = document.getElementById('female');
buttonFemale.addEventListener('click', function () {
  const genreOpcional = document.querySelector('#genre-opcional');
  if (genreOpcional.lastChild !== null) {
    genreOpcional.lastChild.remove();
  }
});

const buttonMale = document.getElementById('male');
buttonMale.addEventListener('click', function () {
  const genreOpcional = document.querySelector('#genre-opcional');
  if (genreOpcional.lastChild !== null) {
    genreOpcional.lastChild.remove();
  }
});
