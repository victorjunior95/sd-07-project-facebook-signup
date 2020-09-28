const pMensageInvalid = document.getElementById('mensage-invalid');
const btButtonLogin = document.getElementById('button-login');
btButtonLogin.addEventListener('click', function () {
  const inpUserEmailPhone = document.getElementById('user-email-phone');
  alert(inpUserEmailPhone.value);
});

function printData() {
  const rightContent = document.getElementsByClassName('right-content')[0];
  rightContent.innerHTML = '';
  const h1 = document.createElement('h1');
  h1.innerText = 'Dados do usuário';
  h1.className = 'open-account'
  rightContent.appendChild(h1);
  const nameData = document.createElement('label');
  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Nome:';
  nameLabel.className = 'label-input';
  nameData.innerText = 'CARMO';
  nameData.className = 'input-style input-size';
  rightContent.appendChild(nameLabel);
  rightContent.appendChild(nameData);
  // const sobrenome
  // const email
  // const nascimento
  // const genero 


}

const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  const inpFirstname = document.getElementsByName('firstname')[0];
  const inpLastname = document.getElementsByName('lastname')[0];
  const inpPhoneEmail = document.getElementsByName('phone_email')[0];
  const inpPassword = document.getElementsByName('password')[0];
  const inpBirthdate = document.getElementsByName('birthdate')[0];
  const inpGender = document.getElementsByName('gender');
  let innerIf = false;

  if (inpFirstname.value.trim() === '') {
    innerIf = true;
  }

  if (inpLastname.value.trim() === '') {
    innerIf = true;
  }

  if (inpPhoneEmail.value.trim() === '') {
    innerIf = true;
  }

  if (inpPassword.value.trim() === '') {
    innerIf = true;
  }

  if (inpBirthdate.value.trim() === '') {
    innerIf = true;
  }

  if (!(inpGender[0].checked) && !(inpGender[1].checked) && !(inpGender[2].checked)) {
    innerIf = true;
  }

  if (innerIf) {
    pMensageInvalid.innerText = 'Campos inválidos';
  }
  printData();
});


const radioFemale = document.getElementById('female');
const radioMale = document.getElementById('male');
const radioPerson = document.getElementById('person');

function clearInput() {
  const addDivPerson = document.getElementById('div-person');
  addDivPerson.innerHTML = '';
}
radioFemale.addEventListener('change', clearInput);

radioMale.addEventListener('change', clearInput);

radioPerson.addEventListener('change', function () {
  const personMargin = document.getElementsByClassName('person-margin').length;
  if (personMargin === 0) {
    const inputRadio = document.createElement('input');
    inputRadio.placeholder = 'Gênero (opcional)';
    inputRadio.name = 'gender-custom';
    inputRadio.className = 'inputLarge input-style person-margin';
    const addDivPerson = document.getElementById('div-person');
    addDivPerson.appendChild(inputRadio);
  }
});

