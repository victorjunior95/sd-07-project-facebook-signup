
document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

// function validarForm() {

// }

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
      required: 'Campo obrigatório',
    },
    email: {
      required: 'Campo obrigatório',
      email: 'E-mail inválido',
    },
    password: {
      required: 'Campo obrigatório',
      strength: 'Senha deve ter pelo menos uma letra maiúscula, uma minúscula, e um número',
    },
    birthdate: {
      required: 'Campo obrigatório',
    },
    gender: {
      required: 'Campo obrigatório',
    },
  },

  // submitHandler: function () {
  //   validarForm();
  // },
});

window.onload = function () {
  return justValidate;
};
