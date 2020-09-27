const buttonSubmit = document.querySelector('#facebook-register');
const buttonLogin = document.getElementById('button-login');
const inputs = document.querySelectorAll('input');
const emailInput = document.querySelector('#user-email-phone');
const pAlert = document.querySelector('.alert');
let genderValue = '';

buttonLogin.addEventListener('click', () => {
  alert(`${emailInput.value}`);
});

function checkInputs() {
  inputs.forEach((input) => {
    if (input.required && input.type !== 'radio') {
      if (input.value === '') {
        pAlert.innerText = 'Campos inválidos';
        return false;
      }
    }
  });
  return true;
}

function checkGender() {
  const gendersInputs = document.querySelector('.genders').querySelectorAll('input');
  let count = 0;

  gendersInputs.forEach((gender) => {
    if (!gender.checked) {
      count += 1;
    } else {
      genderValue = gender.value;
    }
  });

  if (count < 3) {
    return true;
  }

  pAlert.innerText = 'Campos inválidos';
  return false;
}

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const rightContent = document.querySelector('.right-content');

  checkInputs();
  checkGender();

  if (checkGender() && checkInputs()) {
    rightContent.innerHTML = `<h1>Olá, ${inputs[2].value} ${inputs[3].value}</h1>
    <p>Email: ${inputs[4].value}</p>
    <p>Aniversario: ${inputs[6].value}</p>
    <p>Genero: ${genderValue}</p>`;
  }
});
