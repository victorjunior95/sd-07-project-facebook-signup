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
  genreOpcional.appendChild(newField);
}

const buttonCustom = document.getElementById('custom');
buttonCustom.addEventListener('click', createTextField);
