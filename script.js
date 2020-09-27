const radioButton = document.querySelector('.radio-button');
const radioButton1 = document.querySelector('.radio-button1');
const radioButton2 = document.querySelector('.radio-button2');

radioButton.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if (selected) {
    radioButton.classList.add('selected');
    radioButton1.classList.remove('selected');
    radioButton2.classList.remove('selected');
  } else {
    radioButton.classList.add('selected');
  }
});

radioButton1.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if (selected) {
    radioButton1.classList.add('selected');
    radioButton.classList.remove('selected');
    radioButton2.classList.remove('selected');
  } else {
    radioButton1.classList.add('selected');
  }
});

radioButton2.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if (selected) {
    radioButton2.classList.add('selected');
    radioButton1.classList.remove('selected');
    radioButton.classList.remove('selected');
  } else {
    radioButton2.classList.add('selected');
  }
});
radioButton1.addEventListener('click', function () {
  radioButton1.classList.add('selected');
  document.querySelector('radio-button').classList.remove('selected');
  document.querySelector('.radio-button2').classList.remove('selected');
});
radioButton2.addEventListener('click', function () {
  radioButton2.classList.add('selected');
  document.querySelector('radio-button').classList.remove('selected');
  document.querySelector('.radio-button1').classList.remove('selected');
});

const checks = document.querySelectorAll('.check');
function required(event) {
  event.preventDefault();
  const erro = document.createElement('p');
  erro.innerText = 'Campos inválidos';
  erro.className = 'invalid';
  const selected = document.querySelector('.selected');
  const invalid = document.querySelector('.invalid');
  for (let index = 0; index < checks.length; index += 1) {
    if (invalid) {
      checks[index].value = check[index].value;
    } else if (checks[index].value === '' || !selected) {
      document.querySelector('.form-register').appendChild(erro);
    }
  }
}
radioButton2.addEventListener('click', function () {
  const customOption = document.createElement('input');
  customOption.name = 'gender';
  customOption.placeholder = 'Gênero (opcional)';
  customOption.className = 'optional';
  const optional = document.querySelector('.optional');
  if (optional) {
    customOption.name = 'gender';
  } else if (document.querySelector('.personalizado').classList.contains('selected')) {
    document.querySelector('.custom').appendChild(customOption);
  }
});
document.querySelector('#facebook-register').addEventListener('click', required);

document.getElementById('button-login').addEventListener('click', function () {
  const emailValue = document.querySelector('#user-email-phone').value;
  alert(emailValue);
});
