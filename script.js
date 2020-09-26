const logBt = document.getElementById('button-login');

logBt.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

const checkRadio = () => {
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

const radioOption = () => {
  let option = 0;
  const genderList = document.getElementsByName('gender');
  for (let index = 0; index < genderList.length; index += 1) {
    if (genderList[index].checked === true) {
      option = genderList[index].value;
    }
  }
  return option;
}

const validateNewAccountFormLessRadioButton = () => {
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
  if (counter === 0) {
    validation = true;
  } else {
    validation = false;
  }
  return validation;
}

const createDivHello = () => {
  const hello = document.createElement('div');
  const helloFullname = document.createElement('p');
  const firstName = document.getElementsByName('firstname')[0].value;
  const lastName = document.getElementsByName('lastname')[0].value;
  helloFullname.innerText = `Olá, ${firstName} ${lastName}`;
  hello.appendChild(helloFullname);
  const mailPhone = document.createElement('p');
  mailPhone.innerText = document.getElementsByName('phone_email')[0].value;
  hello.appendChild(mailPhone);
  const birthDate = document.createElement('p');
  birthDate.innerText = document.getElementsByName('birthdate')[0].value;
  hello.appendChild(birthDate);
  const gender = document.createElement('p');
  gender.innerText = radioOption();
  hello.appendChild(gender);
  return hello;
}

const welcome = () => {
  const divRightContent = document.getElementsByClassName('right-content')[0];
  const welcomeDiv = createDivHello();
  while (divRightContent.lastElementChild) {
    divRightContent.removeChild(divRightContent.lastElementChild);
  }
  divRightContent.appendChild(welcomeDiv);
  return divRightContent;
}

const validateNewAccountForm = () => {
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

createAccountBt.addEventListener('click', function () {
  if ((validateNewAccountFormLessRadioButton() && checkRadio()) === true) {
    welcome();
  }
});
