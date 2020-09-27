document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});


new JustValidate('.js-form', {
  rules: {
    text: {
      required: true,
    },
  },
  messages: {
    text: {
      required:  'Campos inválidos',
    },
  },
});
