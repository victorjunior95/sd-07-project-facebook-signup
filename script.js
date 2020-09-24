const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const value = document.getElementById('user-email-phone').value;
  alert(value);
});

const justValidate = new window.JustValidate('.form-register', {
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
    masc: {
      required: true,
    },
    fem: {
      required: true,
    },
    pers: {
      required: true,
    },
  },
});

window.onload = function () {
  return justValidate;
};
