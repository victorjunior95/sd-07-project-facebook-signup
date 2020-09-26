function alertButton() {
  const emailTelefone = document.getElementById('user-email-phone').value;
  if (emailTelefone !== '') {
    alert(emailTelefone);
  }
}
document.getElementById('button-login').addEventListener('click', alertButton);

function formValidate() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone_email').value;
  const passWord = document.getElementById('password').value;
  const birthDate = document.getElementById('birthdate').value;
  const inputsGender = document.querySelector('.u-gender-option > input');
  const alertErro = document.querySelectorAll('.alert-erro');
  if (firstName === '') {
    alertErro[0].innerHTML = 'Campos inválidos';
  }
  if (lastName === '') {
    alertErro[1].innerHTML = 'Campos inválidos';
  }
  if (phoneEmail === '') {
    alertErro[2].innerHTML = 'Campos inválidos';
  }
  if (passWord === '') {
    alertErro[3].innerHTML = 'Campos inválidos';
  }
  if (birthDate === '') {
    alertErro[4].innerHTML = 'Campos inválidos';
  }
  if ((inputsGender[0] === '') && (inputsGender[1] === '') && (inputsGender[2] === '')) {
    alertErro[5].innerHTML = 'Campos inválidos';
  }
  return true;
}

document.getElementById('facebook-register').addEventListener('click', formValidate);
