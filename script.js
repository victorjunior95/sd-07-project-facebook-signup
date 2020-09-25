const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

const buttonSignUp = document.querySelector('#facebook-register');

buttonSignUp.addEventListener('click', validaCadastro);

function validaCadastro() {
  const formFields = document.querySelectorAll('.right-content input');
  const rightContent = document.querySelector('.right-content form')
  let emptyFieldMsg = document.createElement('h5');
  emptyFieldMsg.innerText = 'Campos inválidos'
  emptyFieldMsg.className = 'msg-campo-vazio'
  let resetPause = false;

  if (document.querySelector('.msg-campo-vazio') != null ){
    let msgCampoVazio = document.querySelector('.msg-campo-vazio');
    let msgApagada = rightContent.removeChild(msgCampoVazio);
  }

  for (let index = 0; index < formFields.length; index += 1) {
    if (document.querySelector('input[type=radio]:checked') == null && resetPause == false){
      rightContent.insertBefore(emptyFieldMsg, rightContent.children[0]);
    } else if (formFields[index].value == ""){       
        if (formFields[index].getAttribute('type') != 'radio'){
          rightContent.insertBefore(emptyFieldMsg, rightContent.children[2]);
          break;
        }
    } else {
        if (formFields[index].getAttribute('type') == 'radio'){
          formFields[index].checked = false;
          resetPause = true;
        }
      formFields[index].value = "";
    }  
  }
}

function sexo() {
  const genderFeminine = document.getElementById('gender-feminine');
  const genderMale = document.getElementById('gender-male');
  if (genderFeminine) {
    return 'Feminino';
  } else if (genderMale) {
    return 'Masculino';
  }
  return 'Personalizado';
}

// function validaCampos() {
//   sexo();
//   document.getElementById('messager-user').textContent = 'Campos inválidos';
// } Acredito que foi implementado pela function validaCadastro;
