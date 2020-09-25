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
      return;
    }
  }
  const formData = document.getElementById('form-data');
  const data = new FormData(formData);
  document.getElementById('sign-up-completed').classList.remove('gender-personalized');
  document.getElementById('sign-up-form').classList.add('gender-personalized');
  const outputList = document.getElementsByClassName('output-form');
  const outputDiv = document.getElementById('sign-up-completed');
  outputDiv.innerHTML = `Olá ${outputList[0].value} ${outputList[1].value}<br>
  Email: ${outputList[2].value}<br>
  Data de nascimento: ${outputList[3].value}<br>
  Gênero: ${data.gender.value}`;
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
