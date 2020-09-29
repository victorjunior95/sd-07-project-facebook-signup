const divRadios = document.querySelector('.radios-container');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const phoneEmail = document.getElementById('phoneEmail');
const birthday = document.getElementById('date');
const rightContent = document.querySelector('.right-content');


birthday.DatePickerX.init({
});


document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function clearChilds(father) {
  while (father.firstChild) {
    father.removeChild(father.firstChild);
  }
}

function getValueRadios() {
  const radios = document.querySelectorAll('.inputRadios');
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      return radios[index].value;
    }
  }
  return false;
}

function insertValuesParagraph(valueRadio) {
  const p = document.createElement('p');
  p.innerText = `Olá, ${name.value} ${lastname.value}`;
  p.innerText += phoneEmail.value;
  p.innerText += birthday.value;
  p.innerText += valueRadio;
  rightContent.appendChild(p);
}

document.getElementById('facebook-register').addEventListener('click', function () {
  const valueRadio = getValueRadios();
  // clearChilds(rightContent);
  insertValuesParagraph(valueRadio);
});

const validate = new window.JustValidate('.name', {
  rules: {
    name: {
      required: true,
    },
    lastname: {
      required: true,
    },
    phoneEmail: {
      required: true,
    },
    password: {
      required: true,
    },
  },
  messages: {
    name: {
      required: 'Campos inválidos',
    },
    lastname: {
      required: 'Campos inválidos',
    },
    phoneEmail: {
      required: 'Campos inválidos',
    },
    password: {
      required: 'Campos inválidos',
    },
  },
});

document.getElementById('personalizado').addEventListener('click', function () {
  const textInput = document.createElement('input');
  textInput.name = 'gender';
  textInput.placeholder = 'Gênero (opcional)';
  divRadios.appendChild(textInput);
});

window.onload = function () {
  return validate;
};
