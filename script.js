function verifyEmptyInput(values) {
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') return true;
  }

  return false;
}

const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', function () {
  const email = document.forms['form-login'].email.value;
  const passLogin = document.forms['form-login'].password.value;

  if (!verifyEmptyInput([email])) {
    alert(email);
  }
});

const btnValidate = document.getElementById('facebook-register');
btnValidate.addEventListener('click', function () {
  const firstname = document.forms['form-register'].firstname.value;
  const lastname = document.forms['form-register'].lastname.value;
  const phoneEmail = document.forms['form-register'].phone_email.value;
  const password = document.forms['form-register'].password.value;
  const birthdate = document.forms['form-register'].birthdate.value;
  const gender = document.forms['form-register'].gender.value;

  if (verifyEmptyInput([firstname, lastname, phoneEmail, password, birthdate, gender])) {
    const p = document.getElementsByClassName('invalided')[0];
    p.innerText = 'Campos inválidos';
  }
});
