const login = document.getElementById('button-login');
const gender = document.querySelector('#custom');
const buttonSubmit = document.querySelector('#facebook-register');

function checkEmpty(element) {
  if (element.value === ''){
    return true;
  }
  return false;
}

function checkRadios(radios) {
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      return true;
    }
  }
  return false;
}


login.addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  alert(`${email}`);
});

gender.addEventListener('change', () => {
  const form = document.querySelector('#custom-input');
  form.innerHTML = '';
  const text = document.createElement('input');
  text.setAttribute('name', 'gender-custom');
  text.placeholder = 'Gênero (opcional)';
  form.appendChild(text);
});

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll('.valid');
  const radios = document.querySelectorAll('.selected-radio');
  let inputValid = true;
  for (let i = 0; i < inputs.length; i += 1){
    if (checkEmpty(inputs[i])) {
      inputValid = false;
    }
  }
  if (inputValid && checkRadios(radios)) {
    console.log('tudo ok');
  } else {
    const form = document.querySelector('.form-register');
    const error = document.createElement('p');
    error.innerHTML = 'Campos inválidos';
    error.style.color = 'red';
    form.appendChild(error);
  }
});


