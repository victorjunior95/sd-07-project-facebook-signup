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
  newField.className = 'gender-custom';
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
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const phoneMail = document.getElementById('phone_email').value;
  const birthdate = document.getElementById('birthdate').value;
  let genre = null;
  if (btFemale.checked) {
    genre = 'Feminino';
  } else if (btMale.checked) {
    genre = 'Masculino';
  } else if (btCustom.checked) {
    genre = 'Personalizado';
  }

  if (firstname === '') {
    errorMessage.textContent = 'Campos inválidos';
  } else if (lastname === '') {
    errorMessage.textContent = 'Campos inválidos';
  } else if (phoneMail === '') {
    errorMessage.textContent = 'Campos inválidos';
  } else if (document.getElementById('password').value === '') {
    errorMessage.textContent = 'Campos inválidos';
  } else if (birthdate === '') {
    errorMessage.textContent = 'Campos inválidos';
  } else if (btFemale.checked === false && btMale.checked === false && btCustom.checked === false) {
    errorMessage.textContent = 'Campos inválidos';
  } else {
    document.querySelector('.right-content').innerText = `Olá, ${firstname} ${lastname}
    Telefone ou e-mail: ${phoneMail}
    Data de Nascimento: ${birthdate}
    Gênero: ${genre}`;
  }
});