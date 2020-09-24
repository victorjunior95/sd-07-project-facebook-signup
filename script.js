function stopDefAction(evt) {
  let validateOK = true;

  if (document.getElementById('firstname').value === '') {
    validateOK = false;
  }
  if (document.getElementById('lastname').value === '') {
    validateOK = false;
  }
  if (document.getElementById('phone_email').value === '') {
    validateOK = false;
  }
  if (document.getElementById('password').value === '') {
    validateOK = false;
  }
  if (document.getElementById('birthdate').value === '') {
    validateOK = false;
  }
 
  const radios = document.getElementsByName('radio-gender');
  validateRadio = false;
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      validateRadio = true;
    }
  }
  if (!validateRadio) {
    validateOK = false;
  }

  if(!validateOK) {
    document.getElementById('messagem-erro').innerText = 'Campos inválidos';
  } else {
    document.getElementById('messagem-erro').innerText = '';
  }
  
  evt.preventDefault(); 
}

window.onload = function () {
  document.getElementById('button-login').addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });

  document.getElementById('facebook-register').addEventListener('click', stopDefAction, false);
};

