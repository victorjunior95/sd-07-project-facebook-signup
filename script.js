
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
    perGen.id = 'perGen';
    container.appendChild(perGen);
  }
});

document.querySelector('#facebook-register').addEventListener('click', () => {
  const container = document.querySelector('#invalidFields');
  const containerP = document.querySelector('#invalidFields p');
  if (containerP !== null) { container.removeChild(containerP); }
  const formSub = document.querySelectorAll('#subscribe input');
  let blankFields = false;
  for (let i = 0; i < formSub.length; i += 1) {
    const element = formSub[i];
    if (element.value === '') {
      blankFields = true;
    } else if (document.querySelector('input[name="genre"]:checked') === null) {
      blankFields = true;
    }
  }
  if (blankFields === true) { 
    if (document.querySelector('#invalidFields p') === null) {
      const paragraph = document.createElement('p');
      paragraph.innerText = 'Campos inválidos';
      paragraph.id = 'msgError';
      document.querySelector('#invalidFields').appendChild(paragraph);
    }
  }
});
