const entrar = document.getElementById('button-login');
const emailPhone = document.getElementById('user-email-phone');
const inputs = document.querySelectorAll('.forms input');
const register = document.getElementById('facebook-register');
const invalidValues = document.getElementById('invalid');
const personalizeGender = document.getElementById('genero-personalizado');

entrar.addEventListener('click', () => {
  alert(emailPhone.value);
});

function validateInputs() {
  for (let i = 0; i < inputs.length; i += 1) {
    if (!inputs[i].value) {
      invalidValues.innerText = 'Campos inválidos';
    }
  }
}

register.addEventListener('click', validateInputs);
