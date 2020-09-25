function validateInputTextEmpty(inputTexts) {
  let anyEmpty = false;
  for (let index = 0; index < inputTexts.length; index += 1) {
    if (inputTexts[index].value === '') {
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

function stopDefAction(evt) {
  let validateTextsOK = true;
  let validateRadiosOK = true;

  validateTextsOK = !validateInputTextEmpty(document.querySelectorAll('.facebook-signup input[type=text], input[type=password]'));
  validateRadiosOK = !validateInputRadioUnchecked(document.querySelectorAll('.facebook-signup input[type=radio]'));

  if (validateTextsOK && validateRadiosOK) {
    document.getElementById('messagem-erro').innerText = '';
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
