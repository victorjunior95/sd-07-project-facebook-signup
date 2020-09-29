const loginButton = document.getElementById('button-login');
const formInputs = document.querySelectorAll('.new-acount input');
const registerButton = document.getElementById('facebook-register');

loginButton.addEventListener('click', function () {
  const emailOrTel = document.getElementById('user-email-phone');
  alert(emailOrTel.value);
});

registerButton.addEventListener('click', function () {
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].value === '') {
      alert('Campos inválidos');
      return;
    }
  }
});