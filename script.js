/* validate form empty */
function verifyEmpty(values) {
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') return true;
  }

  return false;
}
const btnValidate = document.getElementById('facebook-register');
btnValidate.addEventListener('click', function () {
  const firstname = document.forms['form-facebook'].firstname.value;
  const lastname = document.forms['form-facebook'].lastname.value;
  const phoneEmail = document.forms['form-facebook'].phone_email.value;
  const password = document.forms['form-facebook'].password.value;
  const birthdate = document.forms['form-facebook'].birthdate.value;
  const gender = document.forms['form-facebook'].gender.value;

  console.log(document.forms['form-facebook'].firstname.value);

  if (verifyEmpty([firstname, lastname, phoneEmail, password, birthdate, gender])) {
    const p = document.getElementsByClassName('invalided')[0];
    p.innerText = 'Campos inválidos';
  }
});

/* validate form empty end */
