const button = document.querySelector('#button-login');
const custom = document.querySelector('#Personalizado');
const labelCustom = document.querySelector('#labelCustom');
const submit = document.querySelector('#facebook-register');
const content = document.querySelector('.rigth-content');

button.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone').value;
  alert(userEmail);
});

custom.addEventListener('click', function () {
  const campoTexto = document.createElement('input');
  campoTexto.type = 'text';
  campoTexto.name = 'gender';
  campoTexto.id = 'gender-custom';
  campoTexto.placeholder = 'Gênero (opcional)';
  labelCustom.appendChild(campoTexto);
});
