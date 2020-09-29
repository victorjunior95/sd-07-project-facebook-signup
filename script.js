const email = document.getElementById('user-email-phone');
const button = document.getElementById('button-login');

button.addEventListener('click', function () {
  alert(email.value);
});

function addText() {
  const sexo = document.getElementById('genero');
  const input = document.createElement('INPUT');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'gender-custom');
  input.setAttribute('placehold', 'Gênero (Opcional)');
  input.setAttribute('onkeyup', 'lsRef()');
  sexo.appendChild(input);
}
