const logBt = document.getElementById('button-login');

logBt.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function checkRadio() {
  let counter = 0;
  let validation = 0;
  const genderList = document.getElementsByName('gender');
  for (let index = 0; index < genderList.length; index += 1) {
    if (genderList[index].checked === false) {
      counter += 1;
    }
  }
  if (counter === 3) {
    validation = false;
  } else {
    validation = true;
  }
  return validation;
}
/*
function radioOption() {
  let option = 0;
  const genderList = document.getElementsByName('gender');
  for (let index = 0; index < genderList.length; index += 1) {
    if (genderList[index].checked === true) {
      option = genderList[index].value;
    }
  }
  if (option === 'man') {
    option = 'Masculino';
  }
  if (option === 'woman') {
    option = 'Feminino';
  }
  if (option === 'custom') {
    option = 'Personalizado';
  }
  return option;
} */

function validateNewAccountFormLessRadioButton() {
  const inputCollection = document.getElementsByTagName('input');
  const inputArray = [].slice.call(inputCollection);
  inputArray.splice(0, 2);
  inputArray.splice(5, 3);
  let counter = 0;
  let validation = 0;
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index].value === '') {
      counter += 1;
    }
  }
  if (counter === 5) {
    validation = false;
  } else {
    validation = true;
  }
  return validation;
}
/*
function birthdate() {
  let birthDt = document.getElementsByName('birthdate')[0].value;
  birthDt = birthDt.split('');
  const day = birthDt[8] + birthDt[9];
  const month = birthDt[5] + birthDt[6];
  const year = birthDt[0] + birthDt[1] + birthDt[2] + birthDt[3];
  birthDt = day + '/' + month + '/' + year;
  return birthDt;
}
/*
function createDivWelcome() {
  const welcome = document.createElement('div');
  const welcomeFullname = document.createElement('p');
  welcomeFullname.innerText = 
  'Olá, ' + document.getElementsByName('firstname')[0].value + ' ' + document.getElementsByName('lastname')[0].value;
  welcome.appendChild(welcomeFullname);
  const mailPhone = document.createElement('p');
  mailPhone.innerText = document.getElementsByName('phone_email')[0].value;
  welcome.appendChild(mailPhone);
  const birthDate = document.createElement('p');
  birthDate.innerText = birthdate();
  welcome.appendChild(birthDate);
  const gender = document.createElement('p');
  gender.innerText = radioOption();
  welcome.appendChild(gender);
  return welcome;
}

/*
function welcome() {
  const target = document.getElementsByClassName('right-content')[0];
  const welcome = createDivWelcome();
  while (target.lastElementChild) {
    target.removeChild(target.lastElementChild);
  }
  target.appendChild(welcome);
  return target;
}*/

function validateNewAccountForm() {
  if ((validateNewAccountFormLessRadioButton() && checkRadio()) === false) {
    document.getElementById('invalidation').innerText = 'Campos inválidos';
  } else {
    document.getElementById('invalidation').innerText = '';
  }
}

const createAccountBt = document.getElementById('facebook-register');

createAccountBt.addEventListener('click', validateNewAccountForm);

document.getElementById('custom').addEventListener('click', function () {
  if (document.getElementById('gender-custom').childElementCount === 0) {
    const genderCustom = document.createElement('input');
    genderCustom.name = 'gender-custom';
    genderCustom.placeholder = 'Gênero (opcional)';
    genderCustom.required = true;
    document.getElementById('gender-custom').appendChild(genderCustom);
  }
});
