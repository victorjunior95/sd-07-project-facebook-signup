const buttonAntigo = document.querySelector('#button-login');
const buttonNovo = document.querySelector('#facebook-register');

 validar () {
  buttonAntigo.addEventListener('click', function () {
    const userLogin = document.querySelector('#user-email-phone').value;
    alert(userLogin);
  });
}

 criarFormNovo () {
  const listaForm = {};
  listaForm.firstName = document.getElementById('firstname').value;
  listaForm.lastName = document.getElementById('lastname').value;
  listaForm.email = document.getElementById('phone_email').value;
  listaForm.password = document.getElementById('password').value;
  listaForm.genero = document.querySelector('[type=radio]:checked');
  listaForm.dataNasc = document.getElementById('birthdate').value;
  return listaForm;
}

function validarNovoUsuario () {
  this.criarFormNovo();
  buttonNovo.addEventListener('click', function () {
    if (this.listaForm !== '') {
      alert('Campos inválidos');
    }
  });
}
validarNovoUsuario();
window.onload = function () {
  validarNovoUsuario();
  validar();
};
