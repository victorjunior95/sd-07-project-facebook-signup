const button = document.querySelector('#button-login');
const custom = document.querySelector('#Personalizado');
const labelCustom = document.querySelector('#labelCustom');
button.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone').value;
  alert(userEmail);
});

custom.addEventListener('click', function () {
  const campoTexto = document.createElement('input');
  campoTexto.type = 'text';
  campoTexto.name = 'gender-custom';
  campoTexto.placeholder = 'Gênero (opcional)';
  labelCustom.appendChild(campoTexto);
});
