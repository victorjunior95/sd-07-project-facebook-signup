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
// Qual é o problema com o for in e switch code climate?
const getValuesInputs = () => {
  const inputObjects = { name: '', lastName: '', emailCell: '', birthdate: '', genre: '' };
  for (const names in inputObjects) {
    switch (names) {
      case 'genre':
        const element = document.querySelector('input[name="gender"]:checked').value;
        if (element === 'on') {
          inputObjects[names] = document.querySelector('input[id="genre"]').value;
        } else { inputObjects[names] = element; }
        break;
      case 'birthdate':
        inputObjects[names] = document.querySelector('input[type="date"]').value;
        break;
      default:
        inputObjects[names] = document.querySelector(`#${names}`).value;
    }
  }
  return inputObjects;
};

/* O que vc quer da gente? Já foi tentado enviar tudo colado,
todos no mesmo container separado junto... E qual é o problema dele com o For in? */
const registered = () => {
  const inputs = getValuesInputs();
  const outputContainer = document.createElement('div');
  outputContainer.id = 'right-content';
  outputContainer.className = 'right-content';
  const paragraph = document.createElement('p');
  paragraph.innerText = `Olá, ${inputs.name} ${inputs.lastName}`;
  outputContainer.appendChild(paragraph);
  for (const names in inputs) {
    const nam = inputs[names];
    if (names !== 'name' && names !== 'lastName') {
      const element = document.createElement('output');
      element.value = nam;
      element.style.margin = '3px';
      outputContainer.appendChild(element);
    }
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
