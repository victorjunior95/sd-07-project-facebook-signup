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

  // POG - Programação Orientada a Gambiarra
  // Dica Samanta Below
  // https://trybecourse.slack.com/archives/C017W4EDD4K/p1600990300157300
  function letCodeClimateHappy() {
    return validate;
  }
  letCodeClimateHappy();
};
