const buttonLogin = document.querySelector('#button-login');
const buttonFacebookRegister = document.querySelector('#facebook-register');

buttonLogin.addEventListener('click', function () {
  const campoEmail = document.querySelector('#user-email-phone').value;
  alert(campoEmail);
});

function verifyFormRegisterInputs() {
  const formRegisterInputs = document.getElementsByClassName('required');
  for (let input = 0; input <= formRegisterInputs.length - 1; input += 1) {
    if (formRegisterInputs[input].value === '') {
      return false;
    }
  }
  return true;
}

function verifyRadioGenderChecked() {
  const formRegisterRadio = document.getElementsByClassName('radio');
  for (let input = 0; input <= formRegisterRadio.length - 1; input += 1) {
    if (formRegisterRadio[input].checked) {
      return true;
    }
  }
  return false;
}

buttonFacebookRegister.addEventListener('click', (event) => {
  const errorMessage = document.getElementById('error-message');
  if (!verifyRadioGenderChecked() || !verifyFormRegisterInputs()) {
    errorMessage.innerHTML = 'Campos inválidos';
    errorMessage.style = '';
    event.preventDefault();
  }
});
