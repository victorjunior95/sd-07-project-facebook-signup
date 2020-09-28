const buttonLogin = document.getElementById('button-login');
const inputValue = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(inputValue.value);
});

const validateFields = {
  rules: {
    firstname: {
      required: true,
    },
    lastname: {
      required: true,
      maxLength: 20,
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
};

window.onload = function () {
  const formRules = new window.JustValidate('.form-rules', validateFields);
  return formRules;
};
