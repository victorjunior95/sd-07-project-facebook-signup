const buttonLog = document.querySelector('#button-login');

buttonLog.addEventListener('click', function alertMensagem() {
  const emailOrFone = document.getElementById('user-email-phone');
  alert(emailOrFone.value);
});


const genderSelect = document.querySelector('#custom');
const customDiv = document.querySelector('.custom-div');

genderSelect.addEventListener('click', function () {
  customDiv.innerHTML = '';
  const inputCustom = document.createElement('input');
  inputCustom.name = 'gender-custom';
  inputCustom.placeholder = 'Gênero (opcional)';
  customDiv.appendChild(inputCustom);
});

const female = document.querySelector('#female');
const male = document.querySelector('#male');

function genderOption() {
  let gender = 'Personalizado';
  if (female.checked === true) {
    gender = 'Feminino';
  } else if (male.checked === true) {
    gender = 'Masculino';
  }
  return gender;
}

const inputForm = document.querySelectorAll('.signup input');

function validation() {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `Olá, ${inputForm[0].value} ${inputForm[1].value} <br>
  ${inputForm[2].value} <br>
  ${inputForm[4].value} <br>
  ${genderOption()}`;
}

const signupButton = document.querySelector('#facebook-register');
const signup = document.querySelector('.signup');

signupButton.addEventListener('click', function (event) {
  let valid = true;
  event.preventDefault();
  inputForm.forEach((element) => {
    if (element.value === '') {
      valid = false;
    }
  });
  if (valid === false) {
    signup.innerHTML = 'Campos inválidos';
  } else {
    validation();
  }
});
