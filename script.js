const divRadios = document.querySelector('.radios-container');
const name = document.getElementById('name');
// const lastname = document.getElementById('lastname');
// const phoneEmail = document.getElementById('phoneEmail');

document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

document.getElementById('facebook-register').addEventListener('click', function () {
  alert(name.value);
});

const validate = new window.JustValidate('.name', {
  rules: {
    text: {
      required: true,
    },
  },
  messages: {
    text: {
      required: 'Campos inválidos',
    },
  },
});

document.getElementById('personalizado').addEventListener('click', function () {
  const textInput = document.createElement('input');
  textInput.name = 'gender';
  textInput.placeholder = 'Gênero (opcional)';
  divRadios.appendChild(textInput);
});

window.onload = function () {
  return validate;
};
