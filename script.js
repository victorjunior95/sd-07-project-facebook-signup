const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const nameInput = document.getElementById('user-email-phone').value;
  alert(`${nameInput}`);
});

window.JustValidate('.js-form', {
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
    radio: {
      required: true,
    },
  },
  messages: {
    firstname: 'Campos inválidos',
    lastname: 'Campos inválidos',
    phone_email: 'Campos inválidos',
    password: 'Campos inválidos',
    birthdate: 'Campos inválidos',
    radio: 'Campos inválidos',
  },
});
