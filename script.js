const entrarBotao = document.querySelector('#button-login');
entrarBotao.addEventListener('click', function () {
  const emailOrTel = document.querySelector('#user-email-phone');

  alert(emailOrTel.value);
});

function pegarValorRadio(feminino, masculino, personalizado) {
  if (feminino.checked) {
    return feminino.value;
  } else if (masculino.checked) {
    return masculino.value;
  }
  return personalizado.value;
}

const submitBotao = document.querySelector('#facebook-register');
submitBotao.addEventListener('click', function (evt) {
  evt.preventDefault();

  const firstname = document.querySelector('#firstname').value;
  const lastname = document.querySelector('#lastname').value;
  const phoneEmail = document.querySelector('#phone_email').value;
  const password = document.querySelector('#password').value;
  const birthdate = document.querySelector('#birthdate').value;

  const feminino = document.querySelector('#feminino');
  const masculino = document.querySelector('#masculino');
  const personalizado = document.querySelector('#personalizado');

  const radioChecked = feminino.checked || masculino.checked || personalizado.checked;
  const auxiliarVazio = firstname === '' || lastname === '' || phoneEmail === '' || password === '' || birthdate === '' || radioChecked === false;

  const invalido = document.querySelector('#invalido');

  if (auxiliarVazio) {
    invalido.innerHTML = 'Campos inválidos';
  } else {
    invalido.innerHTML = '';
    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = `
    Olá, ${firstname} ${lastname} <br>
    Email ou telefone: ${phoneEmail} <br>
    Data de nascimento: ${birthdate} <br>
    Gênero ${pegarValorRadio(feminino, masculino, personalizado)}
    `;
  }
});

function personalizadoSelecionado() {
  const divPesonalizado = document.querySelector('#pesonalizado-selecionado');
  const campoPersonalizado = document.createElement('input');
  campoPersonalizado.name = 'gender';
  campoPersonalizado.placeholder = 'Gênero (opcional)';
  divPesonalizado.appendChild(campoPersonalizado);
}

function removerDivPersonalizado() {
  document.querySelector('#pesonalizado-selecionado').innerHTML = '';
}

const personalizadoForm = document.querySelector('#personalizado');
const masculinoForm = document.querySelector('#masculino');
const femininoForm = document.querySelector('#feminino');

personalizadoForm.addEventListener('change', personalizadoSelecionado);
masculinoForm.addEventListener('change', removerDivPersonalizado);
femininoForm.addEventListener('change', removerDivPersonalizado);
