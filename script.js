function validateInputTextEmpty(inputTexts) {
  let anyEmpty = false;
  for (let index = 0; index < inputTexts.length; index += 1) {
    if (inputTexts[index].value === '' && window.getComputedStyle(inputTexts[index]).display !== 'none') {
      anyEmpty = true;
      break;
    }
  }
  return anyEmpty;
}

function validateInputRadioUnchecked(inputRadios) {
  let anyChecked = false;
  for (let index = 0; index < inputRadios.length; index += 1) {
    if (inputRadios[index].checked) {
      anyChecked = true;
      break;
    }
  }
  return !anyChecked;
}

function changeRightContent() {
  document.getElementById('divForm').classList.add('invisible');

  document.getElementById('welcome-user').innerText = `Olá, ${document.getElementById('firstname').value} ${document.getElementById('lastname').value}`;
  let genderValue = '';
  if (document.getElementById('radio-p').checked) {
    genderValue = 'Personalizado';
  } else if (document.getElementById('radio-f').checked) {
    genderValue = 'Feminino';
  } else {
    genderValue = 'Masculino';
  }
  document.getElementById('info-user').innerHTML = `E-mail ou Telefone: ${document.getElementById('phone_email').value} <br> Data de Nacimento: ${document.getElementById('birthdate').value} <br> Gênero: ${genderValue}`;

  document.getElementById('divSignIn').classList.remove('invisible');
}


function stopDefAction(evt) {
  let validateTextsOK = true;
  let validateRadiosOK = true;

  validateTextsOK = !validateInputTextEmpty(document.querySelectorAll('.facebook-signup input[type=text], input[type=password]'));
  validateRadiosOK = !validateInputRadioUnchecked(document.querySelectorAll('.facebook-signup input[type=radio]'));

  if (validateTextsOK && validateRadiosOK) {
    document.getElementById('messagem-erro').innerText = '';
    changeRightContent();
  } else {
    document.getElementById('messagem-erro').innerText = 'Campos inválidos';
  }

  evt.preventDefault();
}

function checkRadioGenderCustom() {
  if (document.getElementById('radio-p').checked) {
    document.getElementById('gender-custom').classList.remove('invisible');
  } else {
    document.getElementById('gender-custom').classList.add('invisible');
  }
}

window.onload = function () {
  document.getElementById('button-login').addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });

  const inputsRadio = document.querySelectorAll('.facebook-signup input[type=radio]');
  for (let index = 0; index < inputsRadio.length; index += 1) {
    inputsRadio[index].addEventListener('click', checkRadioGenderCustom);
  }

  document.getElementById('facebook-register').addEventListener('click', stopDefAction, false);
};
