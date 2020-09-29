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

const singUpInputs = document.querySelectorAll('.sing-up input');
function emptyInput(event) {
  event.preventDefault();
  const errorAlert = document.createElement('p');
  document.querySelector('.sing-up').appendChild(errorAlert);
  for (let count = 0; count < 5; count += 1) {
    if (singUpInputs[count].value === '') {
      errorAlert.innerText = 'Campos inválidos';
    } else {
      const firstName = document.getElementById('firstname').value;
      const lastName = document.getElementById('lastname').value;
      const phoneMail = document.getElementById('phone_email').value;
      const birthDate = document.getElementById('birthdate').value;
      const gender = document.querySelector('input[name="gender"]').value;
      const welcomeUser = `Olá, ${firstName} ${lastName} ${gender} ${phoneMail} ${birthDate}`;
      document.querySelector('.right-content').innerHTML = `${welcomeUser}`;
    }
  }
}
document.getElementById('facebook-register').addEventListener('click', emptyInput);
