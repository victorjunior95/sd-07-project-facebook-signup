const buttonLogin = document.querySelector('button');
const buttonSignUp = document.getElementById('facebook-register');

buttonLogin.addEventListener('click', function () {
  const login = document.querySelector('input');
  alert(login.value);
  login.innerHTML = '';
});

buttonSignUp.addEventListener('click', (e) => {
  e.preventDefault();
  let counterEmptyField = 0;
  const formControl = document.querySelectorAll('#sign-up-form input');
  formControl.forEach(function (form) {
    if (form.value === '' || (form.type === 'radio') !== form.checked) {
      counterEmptyField += 1;
    }
  });
  if (counterEmptyField > 2) {
    const p = document.createElement('p');
    document.querySelector('#sign-up-form')
    .appendChild(p).innerText = 'Campos inválidos';
  }
});
