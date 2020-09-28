// LOGIN
const btnLogin = document.getElementById('button-login');
const inputText = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(inputText.value);
});

// FORMULÁRIO
// Genero
const feminino= document.getElementById("feminino");
feminino.addEventListener('click', function () {
  feminino.checked = true;
});
const masculino= document.getElementById("masculino");
masculino.addEventListener('click', function () {
  masculino.checked = true;
});
const personalizado= document.getElementById("personalizado");
personalizado.addEventListener('click', function () {
  personalizado.checked = true;
  const novoCampoGenero = document.createElement('input');
  novoCampoGenero.name = "gender-custom";
  novoCampoGenero.placeholder = "Gênero (opcional)";
  novoCampoGenero.id = "generoPersonalizado";
  const formulario = document.getElementById("formulario");
  formulario.insertBefore(novoCampoGenero, formulario.childNodes[formulario.length + 1]);
});

// Registro
const facebookRegister= document.getElementById("facebook-register");
facebookRegister.addEventListener('click', function(event) {
  event.preventDefault();
  let gender = "";
  if (feminino.checked !== false || masculino.checked !== false || personalizado.checked !== false) {
    if (feminino.checked == true) {
        gender = "Feminino";
    } else if (masculino.checked == true) {
        gender = "Masculino";
    } else {
        gender = generoPersonalizado.value;
    } 
  }
  const firstname= document.getElementById("firstname");
  const lastname= document.getElementById("lastname");
  const phoneEmail= document.getElementById("phone_email");
  const password= document.getElementById("password");
  const birthdate= document.getElementById("birthdate");
  if (firstname.value == "" || lastname.value == "" || phoneEmail.value == "" || password.value == "" ||
  birthdate.value == "" || gender == "") {
    var campoDeErro = document.createElement("p");
    var textoDeErro = document.createTextNode("Campos inválidos");
    campoDeErro.appendChild(textoDeErro);
    campoDeErro.style.color = "red";
    document.getElementById("formulario").appendChild(campoDeErro);
  } else {
    const rightContent = document.getElementById("inscricao");
    rightContent.innerHTML = `Olá, ${firstname.value} ${lastname.value}
        ${phoneEmail.value}
        ${birthdate.value}
        ${gender}`;
  }
});
