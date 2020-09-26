function newContentRight(data) {
  if (data.length >= 4) {
    const divRightContent = document.querySelector('#right-content');
    while (divRightContent.lastElementChild) {
      divRightContent.removeChild(divRightContent.lastElementChild);
    }
    const newDivRight = document.createElement('div');
    newDivRight.className = 'new-content-right';
    divRightContent.appendChild(newDivRight);
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

let valuesCaptured = [];
const registerButton = document.querySelector('#facebook-register');
registerButton.addEventListener('click', function () {
  const inputsFormRegister = document.querySelectorAll('.validation');
  const validationMsg = document.querySelector('#validation-msg');

  for (let index = 0; index < inputsFormRegister.length; index += 1) {
    if (inputsFormRegister[index].value === '') {
      validationMsg.innerText = 'Campos inválidos';
      validationMsg.style.color = 'red';
      return;
    }
    if (inputsFormRegister[index].name !== 'password') {
      valuesCaptured.push(inputsFormRegister[index].value);
    }
  }
  const radioOptions = document.querySelectorAll('input[name=gender]');
  let selectedRadioOption;
  for (let index = 0; index < radioOptions.length; index += 1) {
    if (radioOptions[index].checked) {
      selectedRadioOption = radioOptions[index].value;
      valuesCaptured.push(selectedRadioOption);
    }
  }
  newContentRight(valuesCaptured);
  valuesCaptured = [];
});
