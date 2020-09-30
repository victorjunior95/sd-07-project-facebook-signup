const button = document.getElementById('button-login');
button.addEventListener('click', function () {
  alert('Email ou telefone');
});

const buttonAntigo = document.querySelector('#button-login');
const buttonNovo = document.querySelector('#facebook-register');
const genderContainer = document.querySelector('#gender-container');
const genderPersonalizado = genderContainer.querySelector('input[value="Personalizado"]');
let campoPGender = document.querySelector('#personalizadoG');

function validar() {
  buttonAntigo.addEventListener('click', function () {
    const userLogin = document.querySelector('#user-email-phone').value;
    alert(userLogin);
  });
}

function validarNovoUsuario() {
  buttonNovo.addEventListener('click', function (event) {
    event.preventDefault();
    const listaForm = {};
    listaForm.firstName = document.getElementById('firstname').value;
    listaForm.lastName = document.getElementById('lastname').value;
    listaForm.email = document.getElementById('phone_email').value;
    listaForm.password = document.getElementById('password').value;
    listaForm.genero = document.querySelector('[type=radio]:checked');
    listaForm.dataNasc = document.getElementById('birthdate').value;
    const values = Object.values(listaForm);
    function exit(){
      return false;
    };
    values.forEach((element) => {
      if (element === null || element === '') {
        alert('Campos inválidos');
        exit();
        listaForm.firstName = '';
        listaForm.lastName = '';
        listaForm.phone_email = '';
        listaForm.password = '';
        listaForm.genero = '';
        listaForm.dataNasc = '';
      }
    });
  });
}
function adicionarCampoGender() {
  genderPersonalizado.addEventListener('click', function () {
    campoPGender = document.querySelector('#personalizadoG');
    if (campoPGender === null) {
      const personalizadoGender = document.createElement('input');
      personalizadoGender.id = 'personalizado-input';
      personalizadoGender.name = 'gender-custom';
      personalizadoGender.placeholder = 'Genero';
      genderContainer.appendChild(personalizadoGender);
    }
  });
}

window.onload = function () {
  validarNovoUsuario();
  validar();
  adicionarCampoGender();
};
