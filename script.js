const login = document.getElementById('button-login');
login.addEventListener('click', () => {
  return alert(`${document.getElementById('user-email-phone').value}`);
});
const buttonSubmit = document.querySelector('#facebook-register');
function checkRadioButton() {
  const gender = document.querySelectorAll('.selected-radio');
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked) {
      return gender[i].value;
    }
  }
  return false;
}
function submit(e) {
  e.preventDefault();
  const inputsRequired = document.querySelectorAll('.valid');
  const gender = checkRadioButton();
  for (let i = 0; i < inputsRequired.length; i += 1) {
    if (inputsRequired[i].value === '' || !gender) {
      const error = document.createElement('p');
      error.innerText = 'Campos inválidos';
      error.style.color = 'red';
      const form = document.querySelector('.form-register');
      return form.appendChild(error);
    }
  }
  const name = document.querySelector('#name').value;
  const lastName = document.querySelector('#lastname').value;
  const phoneOrEmail = document.querySelector('#email-or-phone').value;
  const birth = document.querySelector('#birth').value;
  return document.querySelector('.right-content').innerHTML = `Olá, ${name} ${lastName} ${gender} ${phoneOrEmail} ${birth}`;
}
buttonSubmit.addEventListener('click', submit);
const genderSelect = document.getElementById('custom');
function addCustom() {
  if (genderSelect.checked) {
    const containerCustom = document.getElementById('custom-input');
    const text = document.createElement('input');
    text.setAttribute('name', 'gender-custom');
    text.placeholder = 'Gênero (opcional)';
    containerCustom.appendChild(text);
  }
}
genderSelect.addEventListener('click', addCustom);
