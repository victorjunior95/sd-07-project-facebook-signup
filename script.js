const genrePersonalized = (parameter) => {
  const container = document.querySelector('#personalize-container');
  if (parameter === true) {
    const perGen = document.createElement('input');
    perGen.name = 'gender-custom';
    perGen.placeholder = 'Gênero (opcional)';
    perGen.type = 'text';
    perGen.id = 'genre';
    container.appendChild(perGen);
  } else if (parameter === false && document.querySelector('#personalize-container input') !== null) {
    container.removeChild(document.querySelector('#personalize-container input'));
  }
};

const removePInvalidFields = () => {
  const container = document.querySelector('#invalidFields');
  const containerP = document.querySelector('#invalidFields p');
  if (containerP !== null) { container.removeChild(containerP); }
};

const checkBlankFields = () => {
  removePInvalidFields();
  const formSub = document.querySelectorAll('#subscribe input');
  let blankFields = false;
  for (let i = 0; i < formSub.length; i += 1) {
    if (formSub[i].value === '') {
      blankFields = true;
    } else if (document.querySelector('input[name="gender"]:checked') === null) {
      blankFields = true;
    }
  }
  return blankFields;
};

const createPInvalidFields = () => {
  const paragraph = document.createElement('p');
  paragraph.innerText = 'Campos inválidos';
  paragraph.id = 'msgError';
  document.querySelector('#invalidFields').appendChild(paragraph);
};

const getValues = (inputName) => {
  let objectKey = '';
  switch (inputName) {
    case 'genre':
      objectKey = document.querySelector('input[name="gender"]:checked').value;
      if (objectKey === 'on') {
        objectKey = document.querySelector('input[id="genre"]').value;
      }
      break;
    case 'birthdate':
      objectKey = document.querySelector('input[type="date"]').value;
      break;
    default:
      objectKey = document.querySelector(`#${inputName}`).value;
  }
  return objectKey;
};

const createOutput = (inputName) => {
  const element = document.createElement('output');
  element.innerText = getValues(inputName);
  element.id = inputName;
  element.className = 'outputDisplay';
  return element;
};

const registered = () => {
  const inputList = ['name', 'lastName', 'emailCell', 'birthdate', 'genre'];
  const outputContainer = document.createElement('div');
  outputContainer.id = 'right-content';
  outputContainer.className = 'right-content';
  const paragraph = document.createElement('p');
  paragraph.innerText = `Olá, ${inputList[0]} ${inputList[1]}`;
  outputContainer.appendChild(paragraph);
  for (let i = 0; i < inputList.length; i += 1) {
    outputContainer.appendChild(createOutput(inputList[i]));
  }
  document.querySelector('#right-content').innerHTML = outputContainer.innerHTML;
};

document.querySelector('#button-login').addEventListener('click', () => {
  const getUser = document.querySelector('#user-email-phone').value;
  alert(getUser);
});

for (let i = 0; i < 3; i += 1) {
  const element = document.getElementsByName('gender')[i];
  if (element.id === 'personalized') {
    element.addEventListener('change', () => { genrePersonalized(true); });
  } else {
    element.addEventListener('change', () => { genrePersonalized(false); });
  }
}

document.querySelector('#facebook-register').addEventListener('click', () => {
  if (checkBlankFields() === true) {
    createPInvalidFields();
  } else {
    registered();
  }
});
