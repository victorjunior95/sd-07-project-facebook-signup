const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
const rightContentInputs = document.querySelector('.right-content form')
const formFields = document.querySelectorAll('.right-content input');
const genderFeminine = document.getElementById('gender-feminine');
const genderMale = document.getElementById('gender-male');
const genderCustom = document.getElementById('gender-custom');
const buttonSignUp = document.querySelector('#facebook-register');

buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

function validaCadastro() {
  resetMsg(); 
  for (let index = 0; index < formFields.length; index += 1) {

    if (genero() === ''){
      msgCampoInvalido();
      break;

    } else if (formFields[index].value === '' && formFields[index].getAttribute('type') != 'radio'){
        msgCampoInvalido();
        break;

    } else {
        registrarUsuario();
        break;
    }  
  }
}

buttonSignUp.addEventListener('click', validaCadastro);

function genero() {
  if (genderFeminine.checked) {
    return 'Feminino';
  } else if (genderMale.checked) {
    return 'Masculino';
  } else if (genderCustom.checked) {
    return 'Personalizado';
  } else {
    return ''
  }
}

function msgCampoInvalido() {
  const emptyFieldMsg = document.createElement('h5');
  emptyFieldMsg.innerText = 'Campos inválidos';
  emptyFieldMsg.className = 'msg-campo-vazio';
  rightContentInputs.insertBefore(emptyFieldMsg, rightContentInputs.children[0]);
}

function resetMsg() {
  if (document.querySelector('.msg-campo-vazio') != null){    
    var msgCampoVazio = document.querySelector('.msg-campo-vazio');
    let msgApagada = rightContentInputs.removeChild(msgCampoVazio);
  }
}

function registrarUsuario () {
  let nomeUsuario = document.querySelector('#firstname').value + ' ' + document.querySelector('#lastname').value;
  let emailOuTelefone = document.querySelector('#phone_email').value;
  let birthDate = document.querySelector('#input-birthdate').value;
  let generoEscolhido = genero();
  for (let index = 0; index < formFields.length; index += 1){
    formFields[index].value = '';
    formFields[index].checked = false;
  }
}

