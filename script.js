// Colocar/Retirar a caixa de texto de gênero-personalizado;
const personalizado = document.getElementById('personalizado');
const select = document.getElementById('genero-personalizado');
const masculino = document.getElementById('masculino');
const feminino = document.getElementById('feminino');
personalizado.addEventListener('change', function () {
  select.style.display = 'block';
});
masculino.addEventListener('change', function () {
  select.style.display = 'none';
});
feminino.addEventListener('change', function () {
  select.style.display = 'none';
});

// Alerta do botão login
const botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function () {
  const EmailTelefone = document.getElementById('user-email-phone').value;
  alert(EmailTelefone);
});
