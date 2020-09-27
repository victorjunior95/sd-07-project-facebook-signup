const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const user = document.getElementById('user-email-phone').value;
  alert(user);
});

function createCustomGender() {
  const genderDiv = document.getElementsByClassName('gender-content')[0];
  const genderText = document.createElement('input');
  genderText.setAttribute('type', 'text');
  genderText.setAttribute('name', 'gender-custom');
  genderText.setAttribute('placeholder', 'Gênero (Opcional)');
  genderText.setAttribute('id', 'gender-text');
  genderText.setAttribute('width', '100%');
  genderText.className = 'registration';
  genderDiv.appendChild(genderText);
}

function deleteCustomGender() {
  if (document.getElementById('gender-text') != null) {
    const genderText = document.getElementById('gender-text');
    genderText.parentElement.removeChild(genderText);
  }
}

function changeRadio() {
  if (this.value === 'Personalizado') {
    createCustomGender();
  } else {
    deleteCustomGender();
  }
}

const radios = document.querySelectorAll('input[type=radio][name="gender"]');
Array.prototype.forEach.call(radios, function (radio) {
  radio.addEventListener('change', changeRadio);
});

function validateForm() {
  const warning = document.getElementById('warning');
  if (warning != null) {
    warning.parentElement.removeChild(warning);
  }
  const fields = [
    document.forms['registration-form'].firstname,
    document.forms['registration-form'].lastname,
    document.forms['registration-form'].phone_email,
    document.forms['registration-form'].password,
    document.forms['registration-form'].birthdate,
    document.forms['registration-form'].gender,
  ];
  for (let index = 0; index < fields.length; index += 1) {
    if (fields[index].value === '') {
      // fields[index].value = 'Campos inválidos';
      const registrationForm = document.forms['registration-form'];
      const warning = document.createElement('div');
      warning.setAttribute('id', 'warning');
      warning.innerText = 'Campos inválidos';
      registrationForm.appendChild(warning);
      break;
    }
  }
}

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', validateForm);
