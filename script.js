const buttonLogin = document.getElementById('button-login');

buttonLogin.addEventListener('click', function () {
  const nameInput = document.getElementById('user-email-phone').value;
  alert(`${nameInput}`);
});

//  solução com a ajuda da colega Samata Below
const validate = new window.JustValidate('.js-form', {
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
    radio: {
      required: true,
    },
  },
});

window.onload = function () {
  return validate;
};
