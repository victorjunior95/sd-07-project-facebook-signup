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
  const femaleGender = document.getElementById('female').value;
  const maleGender = document.getElementById('male').value;
  const custonGender = document.getElementById('custon').value;
  const alertErro = document.querySelectorAll('.alert-erro');

  if (firstName === '' || !firstName.trim()) {
    alertErro[0].innerHTML = 'Campos inválidos';
    return false;
  }

  if (lastName === '' || !lastName.trim()) {
    alertErro[1].innerHTML = 'Campos inválidos';
    return false;
  }

  if (phoneEmail === '' || !lastName.trim()) {
    alertErro[2].innerHTML = 'Campos inválidos';
    return false;
  }

  if (passWord === '' || !passWord.trim()) {
    alertErro[3].innerHTML = 'Campos inválidos';
    return false;
  }

  if (birthDate === '' || !birthDate.trim()) {
    alertErro[4].innerHTML = 'Campos inválidos';
    return false;
  }

  if (femaleGender === '' || !femaleGender.trim()) && (maleGender === '' || !maleGender.trim()) && (custonGender === '' || !custonGender.trim()) {
    alertErro[5].innerHTML = 'Campos inválidos';
    return false;
  }
}

document.getElementById('facebook-register').addEventListener('click', formValidate);