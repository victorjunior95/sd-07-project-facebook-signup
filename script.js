const loginButton = document.querySelector('#button-login');
const loginInfo = document.querySelector('#user-email-phone');
const genderCustom = document.querySelector('#Personalizado');
const subimitButton = document.querySelector('#facebook-register');

loginButton.addEventListener('click', function () {
  alert(loginInfo.value);
});

genderCustom.addEventListener('click', () => {
  const customInput = document.createElement('input');
  customInput.setAttribute('name', 'gender-custom');
  customInput.placeholder = 'Gênero (opcional)';
  document.querySelector('#custom').appendChild(customInput);
});

/*
const valida = new window.JustValidate('.open-account', {
  rules: {
    firstname: {
      required: true,
    },
    lastname: {
      required: true,
    },
    phone_email: {
      required: true,
    },
    password: {
      required: true,
    },
    birthdate: {
      required: true,
    },
    gender: {
      required: true,
    },
  },

  messages: {
    firstname: {
      required: 'Campos inválidos',
    },
    lastname: {
      required: 'Campos inválidos',
    },
    phone_email: {
      required: 'Campos inválidos',
    },
    password: {
      required: 'Campos inválidos',
    },
    birthdate: {
      required: 'Campos inválidos',
    },
    gender: {
      required: 'Campos inválidos',
    },
  },

  colorWrong: 'red',

  submitHandler: () => {
    const mensagem = document.createElement('p');
    mensagem.innerHTML = '<strong>campos validos</strong>';
    adicionaMensagem.appendChild(mensagem);
  },

  invalidFormCallback: (errors) => {
    const mensagem = document.createElement('p');
    mensagem.innerHTML = `<strong>Campos inválidos</strong> ${errors}`;
    adicionaMensagem.appendChild(mensagem);
  },
});

window.onload = () => {
  valida();
};
*/

subimitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const adicionaMensagem = document.querySelector('.open-account');
  const valoresInput = document.querySelectorAll('.custom-control-label');
  const mensagem = document.createElement('p');
  adicionaMensagem.appendChild(mensagem);
  for (let index = 0; index < valoresInput.length; index += 1) {
    if (valoresInput[index].value === '') {
      mensagem.innerText = 'Campos inválidos';
    }
  }
});
