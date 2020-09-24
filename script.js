const entrarBotao = document.querySelector('#button-login');
entrarBotao.addEventListener('click', function () {
  const emailOrTel = document.querySelector('#user-email-phone');

  alert(emailOrTel.value);
});

const submitBotao = document.querySelector('#facebook-register');
submitBotao.addEventListener('click', function (evt) {
  evt.preventDefault();

  const firstname = document.querySelector('#firstname').value;
  const lastname = document.querySelector('#lastname').value;
  const phoneEmail = document.querySelector('#phone_email').value;
  const password = document.querySelector('#password').value;
  const birthdate = document.querySelector('#birthdate').value;

  const feminino = document.querySelector('#feminino').checked;
  const masculino = document.querySelector('#masculino').checked;
  const personalizado = document.querySelector('#personalizado').checked;

  const radioChecked = feminino || masculino || personalizado;
  const auxiliarVazio = firstname === '' || lastname === '' || phoneEmail === '' || password === '' || birthdate === '' || radioChecked === false;

  const invalido = document.querySelector('#invalido');

  if (auxiliarVazio) {
    invalido.innerHTML = 'Campos inválidos';
  } else {
    invalido.innerHTML = '';
  }
});

function personalizadoSelecionado() {
  const divPesonalizado = document.querySelector('#pesonalizado-selecionado');
  const campoPersonalizado = document.createElement('input');
  campoPersonalizado.name = 'gender-custom';
  campoPersonalizado.placeholder = 'Gênero';
  divPesonalizado.appendChild(campoPersonalizado);
}

function removerDivPersonalizado() {
  document.querySelector('#pesonalizado-selecionado').innerHTML = '';
}

const personalizadoForm = document.querySelector('#personalizado');
personalizadoForm.addEventListener('click', personalizadoSelecionado);
personalizadoForm.addEventListener('blur', removerDivPersonalizado);
