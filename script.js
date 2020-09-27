const btnLogin = document.getElementById('button-login');

const userEmailPhone = document.getElementById('user-email-phone');

const selectGenderCustom = document.getElementById('Personalizado');

const selectGenderFeminine = document.getElementById('Feminino');

const selectGenderMale = document.getElementById('Masculino');

const form = document.getElementById('form');

function alertLogin() {
  alert(userEmailPhone.value);
}

function customHides() {
  document.getElementById('gender-custom').hidden = true;
}

btnLogin.addEventListener('click', alertLogin);

selectGenderCustom.addEventListener('click', function () {
  document.getElementById('gender-custom').hidden = false;
});

selectGenderFeminine.addEventListener('click', customHides);

selectGenderMale.addEventListener('click', customHides);

form.addEventListener('submit', function (action) {
  const messages = [];
  if (document.getElementById('firstname').value === '' || document.getElementById('firstname').value == null) {
    messages.push('Nome é requerido');
  }

  if (document.getElementById('lastname').value === '' || document.getElementById('lastname').value == null) {
    messages.push('Sobrenome é requerido');
  }

  if (document.getElementById('phone_email').value === '' || document.getElementById('phone_email').value == null) {
    messages.push('Celular ou e-mail é requerido');
  }

  if (document.getElementById('password').value === '' || document.getElementById('password').value == null) {
    messages.push('Nova senha é requerida');
  }

  if (document.getElementById('birthdate').value === '' || document.getElementById('birthdate').value == null) {
    messages.push('Data de nascimento é requerida');
  }

  if (document.getElementById('Feminino').checked === false && document.getElementById('Masculino').checked === false && document.getElementById('Personalizado').checked === false) {
    messages.push('Gênero é requerido');
  }

  if (messages.length > 0) {
    action.preventDefault();
    document.getElementById('message-error').innerText = 'Campos inválidos';
  }
});
