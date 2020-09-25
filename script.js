function alertButton() {
  const emailTelefone = document.getElementById('user-email-phone').value;
  if (emailTelefone !== '') {
    alert(emailTelefone);
  }
}
document.getElementById('button-login').addEventListener('click', alertButton);

function validate() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone_email').value;
  const passWord = document.getElementById('password').value;
  const birthDate = document.getElementById('birthdate').value;
  const femaleGender = document.getElementById('female').checked;
  const maleGender = document.getElementById('male').checked;
  const otherGender = document.getElementById('other').checked;
  const campos = [
    firstName, lastName, phoneEmail, passWord, birthDate, femaleGender,
    maleGender,
    otherGender];
  for (let count = 0; count < campos.length; count += 1) {
    if (campos[count] === '' || !campos[count].trim()) {
      const alertMsg = document.createElement('p');
      alertMsg.innerText = 'Campos inválidos';
      const mainForm = document.getElementsByClassName('sing-up')[0];
      mainForm.appendChild(alertMsg);
    }
  }
}
const buttonSave = document.getElementById('facebook-register');
buttonSave.addEventListener('click', validate);
