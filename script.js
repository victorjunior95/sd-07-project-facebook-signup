const buttonLogin = document.querySelector('button');
const buttonSignUp = document.getElementById('facebook-register');

buttonLogin.addEventListener('click', function () {
  const login = document.querySelector('input');
  alert(login.value);
  login.innerHTML = '';
});

buttonSignUp.addEventListener('click', () => {
  let counterEmptyField = 0;
  const formControl = document.querySelectorAll('#sign-up-form input');
  formControl.forEach(function (form) {
    if (form.value === '' || (form.type === 'radio') !== form.checked) {
      counterEmptyField += 1;
    }
  });
  if (counterEmptyField > 2) {
    alert('Campos inválidos');
  }
});
