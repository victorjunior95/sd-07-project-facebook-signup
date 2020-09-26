const button = document.querySelector('#button-login');
const custom = document.querySelector('#Personalizado');
const labelCustom = document.querySelector('#labelCustom');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const rigthContent = document.querySelector('.right-content');
const submit = document.querySelector('#facebook-register');
const input = document.querySelectorAll('.formInput');
const gender = document.getElementsByName('gender');

button.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone').value;
  alert(userEmail);
});

custom.addEventListener('click', function () {
  const campoTexto = document.createElement('input');
  campoTexto.type = 'text';
  campoTexto.name = 'gender-custom';
  campoTexto.id = 'gender-custom';
  campoTexto.placeholder = 'Gênero (opcional)';
  labelCustom.appendChild(campoTexto);
});

function criarmensagem() {
  rigthContent.innerText = '';
  const mensagem = document.createElement('h2');
  const conteudoNovo = document.createTextNode(`Olá, ${name.value} ${lastName.value}
  ${email.value}
  ${birthdate.value}
  ${gender.value}`);
  mensagem.appendChild(conteudoNovo);
  rigthContent.appendChild(mensagem);
}

submit.addEventListener('click', function () {
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].type === 'text') {
      if (input[i].value === '') {
        alert('Campos inválidos');
        break;
      }
    }
  }
  criarmensagem();
});
