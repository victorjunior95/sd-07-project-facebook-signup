const pMensageInvalid = document.getElementById('mensage-invalid');
const btButtonLogin = document.getElementById('button-login');
btButtonLogin.addEventListener('click', function () {
  const inpUserEmailPhone = document.getElementById('user-email-phone');
  alert(inpUserEmailPhone.value);
});

const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  const inpFirstname = document.getElementsByName('firstname')[0];
  const inpLastname = document.getElementsByName('lastname')[0];
  const inpPhoneEmail = document.getElementsByName('phone_email')[0];
  const inpPassword = document.getElementsByName('password')[0];
  const inpBirthdate = document.getElementsByName('birthdate')[0];
  const inpGender = document.getElementsByName('gender');
  let innerIf = false;

  if (inpFirstname.value.trim() === '') {
    innerIf = true;
  }
  if (inpLastname.value.trim() === '') {
    innerIf = true;
  }
  if (inpPhoneEmail.value.trim() === '') {
    innerIf = true;
  }
  if (inpPassword.value.trim() === '') {
    innerIf = true;
  }
  if (inpBirthdate.value.trim() === '') {
    innerIf = true;
  }

  if (!(inpGender[0].checked) && !(inpGender[1].checked) && !(inpGender[2].checked)) {
    innerIf = true;
  }

  if (innerIf) {
    pMensageInvalid.innerText = 'Campos inválidos';
  }
  alert('Campos inválidos');
});
