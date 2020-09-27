document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});


const validate = new JustValidate('.name', {
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

window.onload = function () {
  return validate;
}
