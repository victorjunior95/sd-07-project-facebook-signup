// Projeto Karine e Arnaelcio
document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

const inputsRadios = document.getElementsByClassName('radio');
const inputGenderCustom = document.querySelector('#selected-gender');

for (let i = 0; i < inputsRadios.length; i += 1) {
  inputsRadios[i].addEventListener('click', function () {
    inputGenderCustom.value = document.querySelector('input:checked').value;
    if (inputGenderCustom.value === 'Personalizado') {
      inputGenderCustom.classList.toggle('hidden');
      inputGenderCustom.value = '';
    }
  });
}

function replaceRightContent() {
  const userDatas = {
    name: document.querySelector('#first-name').value,
    lastName: document.querySelector('#last-name').value,
    email: document.querySelector('#user-email').value,
    birth: document.querySelector('#user-birthdate').value,
    gender: document.querySelector('#selected-gender').value,
  };
  const righContent = document.querySelector('.right-content').childNodes;
  righContent.forEach(function (element) {
    element.className += ' hidden';
  });
  document
    .querySelector('.right-content')
    .appendChild(document.createElement('section'));

  document.querySelector('section').innerText = `
    Olá, ${userDatas.name} ${userDatas.lastName}
    Email: ${userDatas.email}
    Aniversario: ${userDatas.birth}
    Genero: ${userDatas.gender}
    `;
}

function invalidToIfields() {
  document.getElementById('invalid-fields').innerText = 'Campos inválidos';
}

function checkInputRadios() {
  let isCheked = 0;
  const lookInputsRadios = document.getElementsByClassName('radio');
  for (let i = 0; i < lookInputsRadios.length; i += 1) {
    if (lookInputsRadios[i].checked) {
      isCheked += 1;
    }
  }
  if (isCheked === 1) {
    replaceRightContent();
  } else {
    invalidToIfields();
  }
  return isCheked;
}

const inputIsEmpty = document.getElementsByClassName('input-data');
function checkInputDatas() {
  let isEmpty = 0;
  for (let i = 0; i < inputIsEmpty.length; i += 1) {
    if (inputIsEmpty[i].value === '') {
      isEmpty += 1;
    }
  }
  if (isEmpty === 0) {
    checkInputRadios();
  } else {
    invalidToIfields();
  }
  return isEmpty;
}

document
  .querySelector('#facebook-register')
  .addEventListener('click', function () {
    event.preventDefault();
    checkInputDatas();
  });
