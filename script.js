const loginButton = document.getElementById('button-login');

loginButton.addEventListener('click', function () {
  const emailInput = document.getElementById('user-email-phone').value;
  alert(emailInput);
});

const enrrolmentButton = document.getElementById('facebook-register');

enrrolmentButton.addEventListener('click', function (event) {
  event.preventDefault();
  const inputList = document.getElementsByClassName('form-field');

  for (let index = 0; index < inputList.length; index += 1) {
    if (inputList[index].value === '') {
      document.getElementById('invalid-field').style.display = 'block';
    }
  }
});

document.getElementById('other').addEventListener('click', function () {
  document.getElementById('gender-personalized').classList.remove('gender-personalized');
});

document.getElementById('female').addEventListener('click', function () {
  document.getElementById('gender-personalized').classList.add('gender-personalized');
});

document.getElementById('male').addEventListener('click', function () {
  document.getElementById('gender-personalized').classList.add('gender-personalized');
});
