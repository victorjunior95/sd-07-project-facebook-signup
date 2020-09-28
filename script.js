const button = document.querySelector('#button-login');
const custom = document.querySelector('#Personalizado');
const labelCustom = document.querySelector('#labelCustom');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#celular-email');
const birthdate = document.querySelector('#birthdate');
const rigthContent = document.querySelector('.right-content');
const submit = document.querySelector('#facebook-register');
const input = document.querySelectorAll('.formInput');
const gender = document.querySelector('.genero');
let valueGender = '';

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
  ${valueGender}`);
  mensagem.appendChild(conteudoNovo);
  rigthContent.appendChild(mensagem);
}

submit.addEventListener('click', function () {
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].type === 'text') {
      if (input[i].value === '') {
        const elemento = document.querySelector('.forms-rigth');
        const aviso = document.createElement('h3');
        aviso.innerText = 'Campos inválidos';
        elemento.appendChild(aviso);
        break;
      }
    } else {
      criarmensagem();
    }
  }
});

gender.addEventListener('click', function (event) {
  valueGender = event.target.value;
});
