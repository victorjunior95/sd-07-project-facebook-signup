document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function genderSelected() {
  let generoSelected = '';
  if (document.getElementById('feminino').checked) {
    generoSelected = 'feminino';
  }
  if (document.getElementById('masculino').checked) {
    generoSelected = 'masculino';
  }
  if (document.getElementById('personalizado').checked) {
    generoSelected = 'personalizado';
  }
  return generoSelected;
}

function formResponse() {
  const rightContentDiv = document.getElementById('right-content');
  const msnResponse = `Olá, ${document.getElementById('firstname').value} ${document.getElementById('lastname').value}, nascido em ${document.getElementById('user').value}, do gênero: ${genderSelected()}, seu login é: ${document.getElementById('phone-email').value}`;
  rightContentDiv.innerHTML = msnResponse;
}

const justValidate = new window.JustValidate('.js-form', {
  rules: {
    firstname: {
      required: true,
    },
    lastname: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      strength: {
        default: true,
      },
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
    email: {
      required: 'Campos inválidos',
      email: 'E-mail inválido',
    },
    password: {
      required: 'Campos inválidos',
      strength: 'Senha deve ter pelo menos uma letra maiúscula, uma minúscula, e um número',
    },
    birthdate: {
      required: 'Campos inválidos',
    },
    gender: {
      required: 'Campos inválidos',
    },
  },

  submitHandler() {
    formResponse();
  },

});

function showGenderCustom() {
  const genderCustomInput = document.getElementById('gender-custom');
  if (genderCustomInput.style.display === 'none') {
    genderCustomInput.style.display = 'block';
  } else {
    genderCustomInput.style.display = 'none';
  }
}

window.onload = function () {
  const genderCustomInput = document.getElementById('gender-custom');
  genderCustomInput.style.display = 'none';

  const personalizadoRadio = document.getElementById('personalizado');
  personalizadoRadio.addEventListener('click', showGenderCustom);

  const jsFormSubmit = document.getElementById('js-form');
  jsFormSubmit.addEventListener('submit', justValidate);
};
