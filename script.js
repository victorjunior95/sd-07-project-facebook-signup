const loginButton = document.querySelector('#button-login');
const loginInfo = document.querySelector('#user-email-phone');

loginButton.addEventListener('click', function () {
  alert(loginInfo.value);
});

const adicionaMensagem = document.querySelector('.open-account');








const valida = new JustValidate('.open-account', {
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
      strength: {
        default: true,
      }    
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
      strength: {
        default: 'Senha fraca',
      }    
    },
    birthdate: {
      required: 'Campos inválidos',
    },
    gender: {
      required: 'Campos inválidos',
    },
  },

  colorWrong: 'red',

  invalidFormCallback: function (errors) {
    let mensagem = document.createElement('p')
    mensagem.innerHTML = '<strong>Campos inválidos</strong>'
    adicionaMensagem.appendChild(mensagem)
    console.log(errors);
  },

});

window.onload = () => {
  valida();
}
