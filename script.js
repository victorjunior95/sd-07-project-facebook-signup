// Colocar/Retirar a caixa de texto de gênero-personalizado;
const personalizado = document.getElementById('personalizado');
const select = document.getElementById('genero-personalizado');
const masculino = document.getElementById('masculino');
const feminino = document.getElementById('feminino');
const cadastro = document.getElementById('facebook-register');
const iten = document.getElementsByClassName('iten-register');
const invalid = document.getElementById('invalid-forms');
const fullname = document.getElementsByClassName('full-name');
personalizado.addEventListener('change', function () {
  select.style.display = 'block';
//   document.getElementById('gender-custom').innerText = '';
 /* const select = document.createElement('input');
  select.style.display = 'block';
  select.placeholder = 'Gênero (opcional)';
  select.name = 'gender-custom';
  select.id = 'gender-custom';
  select.type = 'text';
  genero.appendChild(select);*/
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


cadastro.addEventListener('click', function () {
  for(let index = 0; index < iten.length; index += 1){
    if (iten[index].value === ''){
       invalid.style.display = 'block';
    }
  }

});