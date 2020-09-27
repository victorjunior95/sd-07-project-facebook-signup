const divRadios = document.querySelector('.radios-container');

document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
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
