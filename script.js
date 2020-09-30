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

  if (messages.length === 0) {
    action.preventDefault();
    const welcome = [];
    welcome.push(document.getElementById('firstname').value);
    welcome.push(document.getElementById('lastname').value);
    welcome.push(document.getElementById('phone_email').value);
    welcome.push(document.getElementById('birthdate').value);
    if (document.getElementById('Feminino').checked === true) {
      welcome.push('Feminino');
    } else if (document.getElementById('Masculino').checked === true) {
      welcome.push('Masculino');
    } else {
      welcome.push('Personalizado');
    }
    document.getElementById('form').hidden = true;
    document.getElementsByClassName('right-content')[0].innerText = `Olá, ${welcome[0]} ${welcome[1]}
    Seu e-mail é ${welcome[2]}
    Sua data de nascimento é ${welcome[3]}
    Seu gênero é ${welcome[4]}`;
  }
});
