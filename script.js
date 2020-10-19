const buttonLogin = document.getElementById('button-login');
const inputValue = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', () => alert(inputValue.value));


const validate = new window.JustValidate('.js-form', {
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

window.onload = function () {
  return validate;
};
