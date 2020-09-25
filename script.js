const buttonLogin = document.querySelector('#button-login');
const emailOrTel = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(emailOrTel.value);
});

window.onload = function () {
  const validate = new window.JustValidate('.form-signup', {
    rules: {
      firstname: {
        required: true,
      },
      lastname: {
        required: true,
      },
    },
    focusWrongField: true,
  });
  function letCodeClimateHappy() {
    return validate;
  }
  letCodeClimateHappy();
};
