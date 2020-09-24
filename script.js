// Colocar/Retirar a caixa de texto de gênero-personalizado;
const personalizado = document.getElementById('personalizado');
// const select = document.getElementById('genero-personalizado');
// const masculino = document.getElementById('masculino');
// const feminino = document.getElementById('feminino');
const genero = document.getElementById('gender');
personalizado.addEventListener('change', function () {
//   document.getElementById('gender-custom').innerText = '';
  const select = document.createElement('input');
  select.style.display = 'block';
  select.placeholder = 'Gênero (opcional)';
  select.name = 'gender-custom';
  select.id = 'gender-custom';
  genero.appendChild(select);
});
// masculino.addEventListener('change', function () {
//   select.style.display = 'none';
// });
// feminino.addEventListener('change', function () {
//   select.style.display = 'none';
// });

// Alerta do botão login
const botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function () {
  const EmailTelefone = document.getElementById('user-email-phone').value;
  alert(EmailTelefone);
});
