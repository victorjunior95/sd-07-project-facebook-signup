const buttonLogin = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const registerFB = document.querySelector('#facebook-register');
const tagFormCreate = document.querySelector('.user-create');
const inputFormCreate = document.querySelectorAll('.create-form');

buttonLogin.addEventListener('click', function () {
  alert(emailInput.value);
});

function CheckIfAllfieldsAreFilled() {
  for (let index = 0; index < inputFormCreate.length; index += 1) {
    if (inputFormCreate[index].value === '' || inputFormCreate[index].checked === false) {
      const invalidFieldsP = document.createElement('p');
      invalidFieldsP.innerText = 'Campos inválidos';
      tagFormCreate.appendChild(invalidFieldsP);
      break;
    }
  }
}

registerFB.addEventListener('click', CheckIfAllfieldsAreFilled);
