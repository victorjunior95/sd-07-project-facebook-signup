const buttonLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(user.value);
});

const testeRadioButton = document.querySelectorAll('.gender');

testeRadioButton[2].addEventListener('click', function () {
  const inputProGeneroPersonalizado = document.createElement('input');

  inputProGeneroPersonalizado.id = 'teste';
  inputProGeneroPersonalizado.name = 'gender-custom';
  inputProGeneroPersonalizado.placeholder = 'Gênero (opcional)';

  const sex = document.querySelector('.sex');

  sex.appendChild(inputProGeneroPersonalizado);
});

function valiName(name, lastName) {
  if (name.length && lastName.length) {
    return `${name} ${lastName}`;
  }
  return false;
}

function testEmail(email, i) {
  if (email[i] === '@') {
    return `Email: ${email}`;
  }
  return false;
}

function testTel(email, i) {
  if (email[i] === '(') {
    return `Telefone: ${email}`;
  }
  return `Telefone: ${email}`;
}

function selectedEmailOrTel(email, i) {
  if (testEmail(email, i)) {
    return testEmail(email, i);
  }
  if (testTel(email, i)) {
    return testTel(email, i);
  }
  return false;
}

function repeatIndexOfEmail(email) {
  for (let i = 0; i < email.length; i += 1) {
    if (email.length - 1 === i) {
      return '';
    }
    if (selectedEmailOrTel(email, i)) {
      return selectedEmailOrTel(email, i);
    }
  }
  return false;
}

function valiEmail(email) {
  if (email === '') {
    return false;
  }
  if (repeatIndexOfEmail(email).length) {
    return repeatIndexOfEmail(email);
  }
  return false;
}

function valiPass(pass) {
  if (pass.length) {
    return true;
  }
  return false;
}

function valiDate(bDate) {
  if (bDate.length) {
    return `Data de Nascimento: ${bDate}`;
  }
  return false;
}

function whatGender(rdBtGender) {
  for (let index = 0; index < rdBtGender.length; index += 1) {
    if (rdBtGender[index].checked) {
      return index;
    }
  }
  return false;
}

function valiGender(rdBtGender) {
  const selected = whatGender(rdBtGender);

  if (selected !== false) {
    return `Sexo: ${rdBtGender[selected].value}`;
  }
  return false;
}

function errorMessage(inputsArray) {
  for (let index = 0; index < inputsArray.length; index += 1) {
    if (!inputsArray[index]) {
      return true;
    }
  }
  return false;
}

const btCadastre = document.querySelector('#facebook-register');

btCadastre.addEventListener('click', function (event) {
  event.preventDefault();

  const name = document.querySelector('#firstname').value;
  const lastName = document.querySelector('#lastname').value;
  const email = document.querySelector('#phone_email').value;
  const pass = document.querySelector('#password').value;
  const bDate = document.querySelector('#birthdate').value;
  const rdBtGender = document.querySelectorAll('.gender');

  const resultName = valiName(name, lastName);
  const resultEmail = valiEmail(email);
  const resultPassword = valiPass(pass);
  const resultDate = valiDate(bDate);
  const resultGender = valiGender(rdBtGender);

  const inputsArray = [resultName, resultEmail, resultPassword, resultDate, resultGender];

  if (errorMessage(inputsArray)) {
    alert('Campos inválidos');
  } else {
    const divText = `\n \n Olá, ${resultName} \n ${resultEmail} \n ${resultDate} \n ${resultGender}`;
    const divRightContainer = document.querySelector('.right-content');
    const tagP = document.createElement('p');

    tagP.className = 'pFinal';
    tagP.innerText = divText;
    divRightContainer.innerHTML = '';
    divRightContainer.appendChild(tagP);
  }
});
