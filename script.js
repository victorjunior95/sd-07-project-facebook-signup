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
    } else if (document.querySelector('input[name="gender-custom"]:checked') === null) {
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

const getValuesInputs = () => {
  const inputObjects = { name: '', lastName: '', emailCell: '', birthdate: '', genre: '' };
  inputObjects.birthdate = document.querySelector('input[type="date"]').value;
  inputObjects.genre = document.querySelector('input[name="gender-custom"]:checked').value;
  for (let i = 0; i < inputObjects.length; i += 1) {
    if (inputObjects[i] === '') {
      inputObjects[i] = document.querySelector(`#${i}`).value;
    }
  }
  if (inputObjects.genre === 'on') {
    inputObjects.genre = document.querySelector('input[id="genre"]').value;
  }
  return inputObjects;
};

const registered = () => {
  const inputs = getValuesInputs();
  const newContainer = document.createElement('div');
  newContainer.id = 'right-content';
  newContainer.className = 'right-content';
  const paragraph = document.createElement('p');
  paragraph.innerText = `Olá, ${inputs.name} ${inputs.lastName}
  O e-mail ou telefone: ${inputs.emailCell};
  Exibir a data de nascimento: ${inputs.birthdate}
  Sexo: ${inputs.genre}`;
  newContainer.appendChild(paragraph);
  document.querySelector('#right-content').innerHTML = newContainer.innerHTML;
};

document.querySelector('#button-login').addEventListener('click', () => {
  const getUser = document.querySelector('#user-email-phone').value;
  alert(getUser);
});

for (let i = 0; i < 3; i += 1) {
  const element = document.getElementsByName('gender-custom')[i];
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
