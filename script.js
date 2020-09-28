// LOGIN
const btnLogin = document.getElementById('button-login');
const inputText = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(inputText.value);
});

// FORMULÁRIO
// Genero
const feminino = document.getElementById('feminino');
feminino.addEventListener('click', function () {
  feminino.checked = true;
});
const masculino = document.getElementById('masculino');
masculino.addEventListener('click', function () {
  masculino.checked = true;
});
const personalizado = document.getElementById('personalizado');
personalizado.addEventListener('click', function () {
  personalizado.checked = true;
  const novoCampoGenero = document.createElement('input');
  novoCampoGenero.name = 'gender-custom';
  novoCampoGenero.placeholder = 'Gênero (opcional)';
  novoCampoGenero.id = 'generoPersonalizado';
  const formulario = document.getElementById('formulario');
  formulario.insertBefore(novoCampoGenero, formulario.childNodes[formulario.length + 1]);
});

// Registro
const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', function (event) {
  event.preventDefault();
  // Verificando existência de campos vazios
  let camposVazios = 0;
  const campos = document.querySelectorAll(".campo");
  for (let index = 0; index < campos.length; index +=1){
    if (campos[index] === ''){
      camposVazios +=1;
    }
  };
  // Verificando o campo gênero e definindo o gender
  let gender = '';
  if (feminino.checked !== false ||
    masculino.checked !== false ||
    personalizado.checked !== false) {
    if (feminino.checked === true) {
      gender = 'Feminino';
    } else if (masculino.checked === true) {
      gender = 'Masculino';
    } else {
      const generoPersonalizado = document.getElementById('generoPersonalizado');
      gender = generoPersonalizado.value;
    }
  } else {
    camposVazios += 1;
  };
  // Exibir mensagem de alerta caso algum campo esteja vazio, senão mostrar informações do usuário
  if (camposVazios > 0) {
    const campoDeErro = document.createElement('p');
    campoDeErro.innerHTML = 'Campos inválidos';
    campoDeErro.style.color = 'red';
    document.getElementById('formulario').appendChild(campoDeErro);
  } else {
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const phoneEmail = document.getElementById('phone_email');
    const password = document.getElementById('password');
    const birthdate = document.getElementById('birthdate');
    const rightContent = document.getElementById('inscricao');
    rightContent.innerHTML = `Olá, ${firstname.value} ${lastname.value}
        ${phoneEmail.value}
        ${birthdate.value}
        ${gender}`;
  }
});
