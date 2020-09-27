const entrar = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');
const register = document.getElementById('facebook-register');
const invalidValues = document.getElementById('invalid');
const ifChecked = document.getElementById('genero-personalizado');

entrar.addEventListener('click', () => {
  alert(emailPhone.value);
});

function validateInputs() {
  const inputs = document.querySelectorAll('.forms input');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '' || inputs[i].checked === false) {
      invalidValues.innerText = 'Campos inválidos';
    }
  }
}

register.addEventListener('click', validateInputs);
ifChecked.addEventListener('click', () => {
  if (ifChecked.checked) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero (opcional)';
    invalidValues.appendChild(newInput);
  }
});
