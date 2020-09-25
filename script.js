const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

const buttonSignUp = document.querySelector('#facebook-register');

buttonSignUp.addEventListener('click', function() {
  const formFields = document.querySelectorAll('.right-content input');
  const rightContent = document.querySelector('.right-content')
  let emptyFieldMsg = document.createElement('h5');
  emptyFieldMsg.innerText = 'Campos inválidos!'
  emptyFieldMsg.className = 'msg-campo-vazio'
  let resetPause = false;

  if (document.querySelector('.msg-campo-vazio') != null ){
    let msgCampoVazio = document.querySelector('.msg-campo-vazio');
    let msgApagada = rightContent.removeChild(msgCampoVazio);
  }

for (let index = 0; index < formFields.length; index += 1) {
  if (document.querySelector('input[type=radio]:checked') == null && resetPause == false){
    rightContent.insertBefore(emptyFieldMsg, rightContent.children[2]);
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
});