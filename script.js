const button = document.querySelector('#button-login');
const custom = document.querySelector('#Personalizado');
const labelCustom = document.querySelector('#labelCustom');
/* const name = document.querySelector('#name').value;
const lastName = document.querySelector('#lastname').value;
const email = document.querySelector('#email').value;
const birthdate = document.querySelector('#birthdate').value;
const content = document.querySelector('.rigth-content'); */
const submit = document.querySelector('#facebook-register');
const input = document.querySelectorAll('.formInput');

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

submit.addEventListener('click', function () {
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].type === 'text') {
      if (input[i].value === '') {
        alert('Campos inválidos');
        break;
      }
    }
  }
});
