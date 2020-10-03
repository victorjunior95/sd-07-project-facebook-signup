const radioButton = document.querySelector('#female');
const radioButton1 = document.querySelector('#male');
const radioButton2 = document.querySelector('#custom');

radioButton.addEventListener('click', function () {
  const selected = document.querySelector('.selected');
  if (selected) {
    radioButton.classList.add('selected');
    radioButton1.classList.remove('selected');
    radioButton2.classList.remove('selected');
    document.querySelector('.gender-selected').removeChild(document.querySelector('.optional'));
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
    document.querySelector('.gender-selected').removeChild(document.querySelector('.optional'));
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
const erro = document.createElement('p');
erro.innerText = 'Campos inválidos';
erro.className = 'invalid';
function required(event) {
  event.preventDefault();

  const selected = document.querySelector('.selected');

  const invalid = document.querySelector('.invalid');
  for (let index = 0; index < checks.length; index += 1) {
    if (invalid) {
      erro.innerText = 'Campos inválidos';
    } else if (checks[index].value === '' || !selected) {
      document.querySelector('.form-register').appendChild(erro);
    }
  }
}

radioButton2.addEventListener('click', function () {
  const customOption = document.createElement('input');
  customOption.name = 'gender-custom';
  customOption.placeholder = 'Gênero (opcional)';
  customOption.className = 'optional';
  customOption.type = 'text';
  const optional = document.querySelector('.optional');
  if (optional) {
    customOption.name = 'gender-custom';
  } else if (document.querySelector('#custom').classList.contains('selected')) {
    document.querySelector('.gender-selected').appendChild(customOption);
  }
});
function hello() {
  const selected = document.querySelector('.selected');
  const conteiner = document.querySelector('.right-content');
  const name = document.querySelector('.name-register');
  const lastName = document.querySelector('.last-name');
  const email = document.querySelector('.email');
  const birth = document.querySelector('.birth-date');
  const optional = document.querySelector('.optional');
  if (optional && optional.value !== '') {
    selected.value = document.querySelector('.optional').value;
  }
  if (name.value !== '' && lastName.value !== '' && email.value !== '' && birth.value !== '' && selected) {
    conteiner.innerHTML = `<h3>Olá, ${name.value} ${lastName.value}<br>Email:${email.value}<br>Date de nascimento:${birth.value}<br>Genêro:${selected.value} </h3>`;
  }
}

document.querySelector('#facebook-register').addEventListener('click', required);
document.querySelector('#facebook-register').addEventListener('click', hello);


document.getElementById('button-login').addEventListener('click', function () {
  const emailValue = document.querySelector('#user-email-phone').value;
  alert(emailValue);
});
