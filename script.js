/* validate form empty */
const btnValidate = document.getElementById('facebook-register');
btnValidate.addEventListener('click', function(){
  let firstname = document.forms['form-facebook']['firstname'].value;
  let lastname = document.forms['form-facebook']['lastname'].value;
  let phone_email = document.forms['form-facebook']['phone_email'].value;
  let password = document.forms['form-facebook']['password'].value;
  let birthdate = document.forms['form-facebook']['birthdate'].value;
  let gender = document.forms['form-facebook']['gender'].value;

  if (firstname == '' || lastname == '' || phone_email == '' || password == '' || birthdate == '' || gender == '') {
    let p = document.getElementsByClassName('invalided')[0];
    p.innerText = "Campos inválidos";
  }
});

/* validate form empty end */
