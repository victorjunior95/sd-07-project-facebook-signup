const button = document.querySelector('#button-login');
const custom = document.querySelector('#Personalizado');
const labelCustom = document.querySelector('#labelCustom');
//const name = document.querySelector('#name').value;
//const lastName = document.querySelector('#lastname').value;
//const email = document.querySelector('#email').value;
//const birthdate = document.querySelector('#birthdate').value;
//const gender = document.querySelector().value;

button.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone').value;
  alert(userEmail);
});

custom.addEventListener('click', function () {
  const campoTexto = document.createElement('input');
  campoTexto.type = 'text';
  campoTexto.name = 'gender';
  campoTexto.placeholder = 'Gênero (opcional)';
  labelCustom.appendChild(campoTexto);
});
