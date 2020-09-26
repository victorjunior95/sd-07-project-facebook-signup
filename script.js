function newContentRight(data) {
  if (data.length >= 4) {
    const parentRightContent = document.querySelectorAll('.main-content')[0];
    const divOldRightContent = document.querySelector('#right-content');
    parentRightContent.removeChild(divOldRightContent);
    const newDivRight = document.createElement('div');
    newDivRight.className = 'new-content-right';
    parentRightContent.appendChild(newDivRight);
    const ulApresentation = document.createElement('ul');
    newDivRight.appendChild(ulApresentation);
    const liItem = document.createElement('li');
    liItem.className = 'welcome-mensage';
    liItem.innerText = `Olá, ${data[0]} ${data[1]}.
    E-mail ou telefone: ${data[2]}
    Data de nascimento: ${data[3]}
    Gênero: ${data[4]}`;
    ulApresentation.appendChild(liItem);
  }
}

const botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function () {
  const emailTelefone = document.querySelector('#user-email-phone').value;
  alert(emailTelefone);
});

const customButton = document.querySelector('#custom-button');
customButton.addEventListener('change', function () {
  const divgender = document.querySelector('#gender-custom');
  divgender.remove.visibility = 'hidden';
  divgender.style.visibility = 'visible';
});

const registerButton = document.querySelector('#facebook-register');
registerButton.addEventListener('click', function () {
  const inputsFormRegister = document.querySelectorAll('.validation');
  const validationMsg = document.querySelector('#validation-msg');
  const valuesCaptured = [];
  for (let index = 0; index < inputsFormRegister.length; index += 1) {
    if (inputsFormRegister[index].value === '') {
      validationMsg.innerText = 'Campos inválidos';
      validationMsg.style.color = 'red';
    } else {
      if (inputsFormRegister[index].name !== 'password') {
        valuesCaptured.push(inputsFormRegister[index].value);
      }
    }
  }
  newContentRight(valuesCaptured);
});
