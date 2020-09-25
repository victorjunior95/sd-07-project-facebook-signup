const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(user.value);
});

const radioCustomGender = document.getElementsByName('gender')[2];
radioCustomGender.addEventListener('click', function () {
  const newAccForm = document.querySelector('.new-account');
  const genderCustom = document.createElement('input');
  genderCustom.type = 'text';
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';
  newAccForm.appendChild(genderCustom);
  newAccForm.insertBefore(genderCustom, newAccForm.children[19]);
});


const justValidate = new window.JustValidate('.new-account', {
  messages: {
    primeiroNome: {
      required: 'Campos inválidos',
    },
    ultimoNome: {
      required: 'Campos inválidos',
    },
    email: {
      required: 'Campos inválidos',
    },
    password: {
      required: 'Campos inválidos',
    },
    birthdate: {
      required: 'Campos inválidos',
    },
    radio: {
      required: 'Campos inválidos',
    },
  },

  rules: {
    primeiroNome: {
      required: true,
    },
    ultimoNome: {
      required: true,
    },
    birthdate: {
      required: true,
    },
    radio: {
      required: true,
    },
  },

});

justValidate.init();
