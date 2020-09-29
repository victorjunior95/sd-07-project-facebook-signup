function alertButton() {
  const emailTelefone = document.getElementById('user-email-phone').value;
  if (emailTelefone !== '') {
    alert(emailTelefone);
  }
}
document.getElementById('button-login').addEventListener('click', alertButton);

function radioCheked() {
  const otherGender = document.getElementById('other');
  const novoInput = document.createElement('input');
  const inputsValue = document.querySelectorAll('.u-gender-option input');
  if ((otherGender.checked) && (inputsValue.length < 4)) {
    novoInput.setAttribute('id', 'gender-custom');
    novoInput.setAttribute('placeholder', 'Gênero (opcional)');
    document.querySelector('.u-gender-option').appendChild(novoInput);
  }
}
document.getElementById('other').addEventListener('click', radioCheked);

let selectedGender = '';
function selected() {
  const gender = document.querySelectorAll('.u-gender-option input');
  for (let count = 0; count < gender.length; count += 1) {
    if (gender[count].checked) {
      selectedGender = gender[count].value;
    }
  }
}
document.getElementById('female').addEventListener('click', selected);
document.getElementById('male').addEventListener('click', selected);
document.getElementById('other').addEventListener('click', selected);

const singUpInputs = document.querySelectorAll('.sing-up input');
function emptyInput(event) {
  event.preventDefault();
  const errorAlert = document.createElement('p');
  document.querySelector('.sing-up').appendChild(errorAlert);
  let verifier = 0;
  for (let count = 0; count < 5; count += 1) {
    if (singUpInputs[count].value === '') {
      verifier += 1;
    }
  }
  if (verifier >= 1) {
    errorAlert.innerText = 'Campos inválidos';
  } else {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const phoneMail = document.getElementById('phone_email').value;
    const birthDate = document.getElementById('birthdate').value;
    const welcomeUser = `Olá, ${firstName} ${lastName} ${selectedGender} ${phoneMail} ${birthDate}`;
    document.querySelector('.right-content').innerHTML = `${welcomeUser}`;
  }
}
document.getElementById('facebook-register').addEventListener('click', emptyInput);
