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

function displayUserData() {
  const formRegister = document.forms[1];
  const firstName = formRegister.elements.firstname.value;
  const secondName = formRegister.elements.lastname.value;
  const emailOrPhone = formRegister.elements.phone_email.value;
  const birthday = formRegister.elements.birthdate.value;
  const gender = formRegister.elements.gender.value;
  const divRightContent = document.querySelector('.right-content');
  divRightContent.innerHTML = `<p>Olá, ${firstName} ${secondName}</p>`;
  divRightContent.innerHTML += `<p>${emailOrPhone}</p>`;
  divRightContent.innerHTML += `<p>${birthday}</p>`;
  divRightContent.innerHTML += `<p>${gender}</p>`;
}

const formRegister = document.getElementById('register');
formRegister.addEventListener('submit', (event) => {
  event.preventDefault();
  displayUserData();
  return false;
});

document.addEventListener('click', function (event) {
  const genderCustomText = document.getElementById('gender-custom');
  if (event.target.classList.contains('custom')) {
    genderCustomText.style = '';
    return true;
  }
  genderCustomText.style = 'display: none;';
  return false;
});

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function () {
  const campoEmail = document.querySelector('#user-email-phone').value;
  alert(campoEmail);
});

const buttonFacebookRegister = document.querySelector('#facebook-register');
buttonFacebookRegister.addEventListener('click', (event) => {
  const errorMessage = document.getElementById('error-message');
  if (!verifyRadioGenderChecked() || !verifyFormRegisterInputs()) {
    errorMessage.innerHTML = 'Campos inválidos';
    errorMessage.style = '';
    event.preventDefault();
    return false;
  }
  return true;
});
