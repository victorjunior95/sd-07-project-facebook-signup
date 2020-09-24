const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const value = document.getElementById('user-email-phone').value;
  alert(value);
});

window.JustValidate('form-register', {
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
    genero: {
      required: true,
    },
  },
});
