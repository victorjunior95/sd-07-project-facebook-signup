const buttonLogin = document.querySelector('#button-login');
const emailOrTel = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function (event) {
  event.preventDefault();
  alert(emailOrTel.value);
});

window.onload = function () {
  new window.JustValidate('.form-signup', {
    rules: {
      firstname: {
        required: true
      },
      lastname: {
        required: true
      },
    },
    focusWrongField: true,
    submitHandler: function (form, values, ajax) {
      console.log(values);
      ajax({
        url: 'https://just-validate-api.herokuapp.com/submit',
        method: 'POST',
        data: values,
        async: true,
        callback: (response) => {
          console.log(response);
        },
      });
    },
    invalidFormCallback: function (errors) {
      console.log(errors);
    },
  });
};
