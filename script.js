const button = document.getElementById('button-login');

button.addEventListener('click', function () {
  alert(email.value);
});

const feminino = document.getElementById('feminino');
feminino.addEventListener('click', function () {
  feminino.checked = true;
});
const masculino = document.getElementById('masculino');
masculino.addEventListener('click', function () {
  masculino.checked = true;
});
const personalizado = document.getElementById('personalizado');
personalizado.addEventListener('click', function () {
  personalizado.checked = true;
  const novoCampoGenero = document.createElement('input');
  novoCampoGenero.name = 'gender-custom';
  novoCampoGenero.placeholder = 'Gênero (opcional)';
  const generoPersonalizado = document.getElementsByClassName('generoPersonalizado');
  generoPersonalizado[0].appendChild(novoCampoGenero);
});

const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', function (event) {
  event.preventDefault();
  let camposVazios = 0;
  const campos = document.querySelectorAll('.campo');
  for (let index = 0; index < campos.length; index += 1) {
    if (campos[index] === '') {
      camposVazios += 1;
    }
  }

  let gender = '';
  if (feminino.checked !== false ||
    masculino.checked !== false ||
    personalizado.checked !== false) {
    if (feminino.checked === true) {
      gender = 'Feminino';
    } else if (masculino.checked === true) {
      gender = 'Masculino';
    } else {
      gender = 'Personalizado';
    }
  } else {
    camposVazios += 1;
  }

  if (camposVazios > 0) {
    const campoDeErro = document.createElement('p');
    campoDeErro.innerHTML = 'Campos inválidos';
    campoDeErro.style.color = 'red';
    document.getElementById('formulario').appendChild(campoDeErro);
  } else {
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const phoneEmail = document.getElementById('phone_email');
    const birthdate = document.getElementById('birthdate');
    const rightContent = document.getElementById('inscricao');
    rightContent.innerHTML = `Olá, ${firstname.value} ${lastname.value}
        ${phoneEmail.value}
        ${birthdate.value}
        ${gender}`;
  }
});
