const loginBtn = document.querySelector('#button-login');
loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const emailInput = document.querySelector('#user-email-phone').value;
  alert(`${emailInput}`);
});
/* const validate = new window.JustValidate('.js-form', {
  rules: {
    last_name: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    email_phone: {
      required: true,
      maxLength: 50,
    },
    radio: {
      required: true,
    },
    birthdate: {
      required: true,
      minLength: 10,
      maxLength: 10,
    },
    messages: {
      name: {
        required: 'Campos inválidos',
      },
      last_name: {
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
      radio: {
        required: 'Campos inválidos',
      }
    },
  }
});*/
const personalizadoRadio = document.querySelector('#personalizado');
personalizadoRadio.addEventListener('click', function () {
  const gender = document.querySelector('.gender');
  const createField = document.createElement('input');
  createField.name = 'gender-custom';
  createField.placeholder = 'Gênero (opcional)';
  gender.appendChild(createField);
});
// console.log(validate);
