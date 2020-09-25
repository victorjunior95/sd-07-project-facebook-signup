// Colocar/Retirar a caixa de texto de gênero-personalizado;
const personalizado = document.getElementById('personalizado');
// const select = document.getElementById('genero-personalizado');
// const masculino = document.getElementById('masculino');
// const feminino = document.getElementById('feminino');
const genero = document.getElementById('gender');
personalizado.addEventListener('change', function () {
  const select = document.createElement('input');
  select.style.display = 'block';
  select.placeholder = 'Gênero (opcional)';
  select.name = 'gender-custom';
  select.id = 'gender-custom';
  select.type = 'text';
  genero.appendChild(select);
});
// masculino.addEventListener('change', function () {
//     if(document.getElementById('gender-custom'){
//   document.getElementById('gender-custom').innerHTML = '';
//     }
// });
// feminino.addEventListener('change', function () {
//     if(document.getElementById('gender-custom'){
//     document.getElementById('gender-custom').innerHTML = '';
//     }
// });

// Alerta do botão login
const botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function () {
  const EmailTelefone = document.getElementById('user-email-phone').value;
  alert(EmailTelefone);
});

// Mensagem "Campos inválidos"

const registre = document.getElementById('facebook-register');

registre.addEventListener('click', function () {
  const firstname = document.getElementById('firstname');
  const lastname = document.getElementById('lastname');
  const password = document.getElementById('password');
  const birthdate = document.getElementById('birthdate');
  const form = document.querySelector('.create-account-form');

  if (firstname.value === '' || lastname.value === '' || password.value === '' || birthdate.value === '') {
    const novo = document.createElement('h3');
    novo.innerText = 'Campos inválidos';
    form.appendChild(novo);
  }
});
