document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function genderSelected() {
  let generoSelected = '';
  if (document.getElementById('feminino').checked) {
    generoSelected = document.getElementById('feminino').value;
  }
  if (document.getElementById('masculino').checked) {
    generoSelected = document.getElementById('masculino').value;
  }
  if (document.getElementById('personalizado').checked) {
    generoSelected = document.getElementById('personalizado').value;
  }
  return generoSelected;
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
    },
    birthdate: {
      required: 'Campos inválidos',
    },
    gender: {
      required: 'Campos inválidos',
    },
  },

  submitHandler() {
    const rightContentDiv = document.getElementById('right-content');
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phoneEmail = document.getElementById('phone-email').value;
    const user = document.getElementById('user').value;
    const msnResponse = document.createElement('div');
    msnResponse.className = 'form-response';
    msnResponse.innerHTML = `<p>Olá, ${firstname} ${lastname}</p>
    <p>E-mail e/ou telefone: ${phoneEmail}</p>
    <p>Data de Nascimento: ${user}</p>
    <p>Genero: ${genderSelected()}.</p>`;
    rightContentDiv.innerHTML = '';
    rightContentDiv.appendChild(msnResponse);
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

  document
    .querySelectorAll('#feminino, #masculino')
    .forEach(function (element) {
      element.addEventListener('click', function () {
        document.getElementById('gender-custom').style.display = 'none';
      });
    });

  return justValidate;
};
