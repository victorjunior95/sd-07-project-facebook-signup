const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const user = document.getElementById('user-email-phone').value;
  alert(user);
});

// const genderRadio = document.getElementsByClassName('gender');

// genderRadio[0].addEventListener('click', function () {
//   const genderText = document.getElementById('gender-text');
//   genderText.style.display = 'none';
// });

// genderRadio[1].addEventListener('click', function () {
//   const genderText = document.getElementById('gender-text');
//   genderText.style.display = 'none';
// });

// genderRadio[2].addEventListener('click', function () {
//   const genderText = document.getElementById('gender-text');
//   genderText.style.display = 'block';
// });

function createCustomGender() {
  const registrationForm = document.forms['registration-form'];
  const genderText = document.createElement('input');
  genderText.setAttribute('type', 'text');
  genderText.setAttribute('name', 'gender-custom');
  genderText.setAttribute('placeholder', 'Gênero (Opcional)');
  genderText.setAttribute('id', 'gender-text');
  // genderText.setAttribute('display', 'flex');
  genderText.setAttribute('width', '100%');
  genderText.className = 'registration';
  registrationForm.appendChild(genderText);
  registrationForm.insertBefore(genderText, registrationForm.childNodes[12]);
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
      alert('Campos inválidos');
      return false;
    }
  }
  return true;
}

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', validateForm);
