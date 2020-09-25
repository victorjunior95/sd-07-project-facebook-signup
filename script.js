const buttonLogin = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const registerFB = document.querySelector('#facebook-register');
const tagFormCreate = document.querySelector('.user-create');
const inputFormCreate = document.querySelectorAll('.create-form');
let createFormValid = false;

buttonLogin.addEventListener('click', function () {
  alert(emailInput.value);
});

function showAllInformations() {
  if(createFormValid === true) {
    console.log('DEU CERTO');
  }
}

function CheckIfAllfieldsAreFilled(e) {
   e.preventDefault();
   console.log(document.querySelector('input[name="gender"]:checked').value);
  for (let index = 0; index < inputFormCreate.length; index += 1) {
    if (inputFormCreate[index].value === '' || inputFormCreate[index].checked === false) {
      const invalidFieldsP = document.createElement('p');
      invalidFieldsP.innerText = 'Campos inválidos';
      tagFormCreate.appendChild(invalidFieldsP);
      break;
    }
  }  
  createFormValid = true;
  showAllInformations();
}

registerFB.addEventListener('click', CheckIfAllfieldsAreFilled);
