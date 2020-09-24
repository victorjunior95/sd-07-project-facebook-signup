/* validate form empty */
const btnValidate = document.getElementById('facebook-register');
btnValidate.addEventListener('click', function () {
  const firstname = document.forms['form-facebook']['firstname'].value;
  const lastname = document.forms['form-facebook']['lastname'].value;
  const phone_email = document.forms['form-facebook']['phone_email'].value;
  const password = document.forms['form-facebook']['password'].value;
  const birthdate = document.forms['form-facebook']['birthdate'].value;
  const gender = document.forms['form-facebook']['gender'].value;

  if (firstname == '' || lastname == '' || phone_email == '' || password == '' || birthdate == '' || gender == '') {
    const p = document.getElementsByClassName('invalided')[0];
    p.innerText = "Campos inválidos";
  }
});

/* validate form empty end */
