const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const emailInput = document.getElementById('user-email-phone');
  alert(emailInput.value);
});

const buttonRegister = document.getElementById('facebook-register');
const personal = document.getElementById('personal');
const form = document.getElementById('form');


function deleteForm() {
  const rightContent = document.getElementsByClassName('right-content')[0];
  rightContent.removeChild(form);
}

function createMessage(name, lastName, email, date, gender) {
  const rightContent = document.getElementsByClassName('right-content')[0];
  const message = document.createElement('p');
  message.innerText = `Olá, ${name} ${lastName}
  ${email}
  ${date}
  ${gender}`;
  rightContent.appendChild(message);
}

function checkGender(feminino, masculino) {
  let message = '';
  if (feminino) {
    message = 'Feminino';
  } else if (masculino) {
    message = 'Masculino';
  } else {
    message = 'Personalizado';
  }

  return message;
}

buttonRegister.addEventListener('click', function () {
  event.preventDefault();
  const inputItems = document.getElementsByClassName('input-item');
  let counter = 0;
  for (let index = 0; index < inputItems.length; index += 1) {
    const result = inputItems[index];
    if (result.value === '') {
      counter += 1;
    }
  }
  const feminino = document.getElementById('feminino').checked;
  const masculino = document.getElementById('masculino').checked;

  const gender = checkGender(feminino, masculino);

  const name = inputItems[0].value;
  const lastName = inputItems[1].value;
  const email = inputItems[2].value;
  const date = inputItems[4].value;


  const gen = ((feminino) === false && (masculino) === false && (personal.checked) === false);
  if (counter > 0 || gen === true) {
    const tagP = document.createElement('p');
    tagP.innerText = 'Campos inválidos';
    form.appendChild(tagP);
  } else {
    deleteForm();
    createMessage(name, lastName, email, date, gender);
  }
});


const buttonBox = document.getElementById('button-box');
personal.addEventListener('click', function () {
  const newInput = document.createElement('input');
  form.insertBefore(newInput, buttonBox);
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
});
