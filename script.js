
document.querySelector('#button-login').addEventListener('click', () => {
  const getUser = document.querySelector('#user-email-phone').value;
  alert(getUser);
});

document.querySelector('#personalized').addEventListener('change', () => {
  if (document.querySelector('#personalize-container input') === null) {
    const perGen = document.createElement('input');
    const container = document.querySelector('#personalize-container');
    perGen.name = 'gender-custom';
    perGen.placeholder = 'Gênero (opcional)';
    perGen.type = 'text';
    perGen.id = 'genre';
    container.appendChild(perGen);
  }
});

document.querySelector('#facebook-register').addEventListener('click', () => {
  if (checkBlankFields() === true) {
    createPInvalidFields();
  } else {
    registered();
  }
});

checkBlankFields = () => {
  removePInvalidFields();
  const formSub = document.querySelectorAll('#subscribe input');
  let blankFields = false;
  for (let i = 0; i < formSub.length; i += 1) {
    if (formSub[i].value === '') {
      return blankFields = true;
    } else if (document.querySelector('input[name="gender-custom"]:checked') === null) {
      return blankFields = true;
    }
  }
};

removePInvalidFields = () => {
  const container = document.querySelector('#invalidFields');
  const containerP = document.querySelector('#invalidFields p');
  if (containerP !== null) { container.removeChild(containerP); }
};

createPInvalidFields = () => {
  const paragraph = document.createElement('p');
  paragraph.innerText = 'Campos inválidos';
  paragraph.id = 'msgError';
  document.querySelector('#invalidFields').appendChild(paragraph);
};
//refatorar func a seguir
getValuesInputs = () => {
  const inputs = {name : "", lastName: "", emailCell: "", birthdate: "", genre: ""};
  const formSub = document.querySelectorAll('#subscribe input');
  for(let name in  formSub) {
    switch (formSub[name].type) {
      case 'text':
        inputs[formSub[name].id] = formSub[name].value;
        break;
      case 'date':
        inputs.birthdate = document.querySelector('input[type="date"]').value; 
        break;
      case 'radio':
        if(document.querySelector('input[name="gender-custom"]:checked').id === formSub[name].id){
          inputs.genre = document.querySelector(`input[id=${formSub[name].id}]`).value;
        };
    }
  };
  return inputs;
};

//refatorar
registered = () => {
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
