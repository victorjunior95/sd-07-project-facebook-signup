const logBt = document.getElementById('button-login');

logBt.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function checkRadio() {
  let counter = 0;
  let validation = 0;
  const genderList = document.getElementsByName('gender');
  for (let index = 0; index < genderList.length; index += 1) {
    if (genderList[index].checked === false) {
      counter += 1;
    }
  }
  if (counter === 3) {
    validation = false;
  } else {
    validation = true;
  }
  return validation;
}

function validateNewAccountFormLessRadioButton() {
  const inputCollection = document.getElementsByTagName('input');
  const inputArray = [].slice.call(inputCollection);
  inputArray.splice(0, 2);
  inputArray.splice(5, 3);
  let counter = 0;
  let validation = 0;
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index].value === '') {
      counter += 1;
    }
  }
  if (counter === 5) {
    validation = false;
  } else {
    validation = true;
  }
  return validation;
}

function validateNewAccountForm() {
  if ((validateNewAccountFormLessRadioButton() && checkRadio()) === false) {
    document.getElementById('invalidation').innerText = 'Campos inválidos';
  } else {
    document.getElementById('invalidation').innerText = '';
  }
}

const createAccountBt = document.getElementById('facebook-register');

createAccountBt.addEventListener('click', validateNewAccountForm);

document.getElementById('custom').addEventListener('click', function () {
  const genderCustom = document.createElement('input');
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';
  genderCustom.required = true;
  document.getElementById('gender-custom').appendChild(genderCustom);
})
