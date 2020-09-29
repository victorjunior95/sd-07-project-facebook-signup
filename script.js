const email = document.getElementById('user-email-phone');
const button = document.getElementById('button-login');

button.addEventListener('click', function () {
  alert(email.value);
});

function addText() {
  const sexo = document.getElementById('genero');
  let input = document.createElement('INPUT');
  input.setAttribute("type", "text");
  input.setAttribute("name", 'gender-custom');
  input.setAttribute('placeholder', 'Gênero (Opcional)');
  sexo.appendChild(input);
}