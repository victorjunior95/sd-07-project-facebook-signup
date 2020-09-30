const login = document.getElementById('button-login');
const genderSelect = document.getElementById('custom');
const buttonSubmit = document.querySelector('#facebook-register');

function checkEmpty(element) {
  if (element.value === '') {
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

function data() {
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('email-or-phone').value;
  const birthDate = document.getElementById('birth').value;
  const genderOptions = document.querySelectorAll('.selected-radio');
  let gender = '';
  for (let i = 0; i < genderOptions.length; i += 1) {
    if (genderOptions[i].checked) {
      gender = genderOptions[i].value;
    }
  }
  const user = {
    name,
    lastName,
    email,
    birthDate,
    gender,
  };
  return user;
}

function welcome(user) {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `<p>Olá, ${user.name} ${user.lastName}</p>`;
  rightContent.innerHTML += `<p>${user.email}</p>`;
  rightContent.innerHTML += `<p>${user.birthDate}</p>`;
  rightContent.innerHTML += `<p>${user.gender}</p>`;
}


login.addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  alert(`${email}`);
});

genderSelect.addEventListener('click', () => {
  if (genderSelect.checked) {
    const containerCustom = document.getElementById('custom-input');
    const text = document.createElement('input');
    text.setAttribute('name', 'gender-custom');
    text.placeholder = 'Gênero (opcional)';
    containerCustom.appendChild(text);
  }
});

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll('.valid');
  const radios = document.querySelectorAll('.selected-radio');
  let inputValid = true;
  for (let i = 0; i < inputs.length; i += 1) {
    if (checkEmpty(inputs[i])) {
      inputValid = false;
    }
  }
  if (inputValid && checkRadios(radios)) {
    const user = data();
    return welcome(user);
  }
  const form = document.querySelector('.form-register');
  const error = document.createElement('p');
  error.innerHTML = 'Campos inválidos';
  error.style.color = 'red';
  return form.appendChild(error);
});
