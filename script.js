const login = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');

const name = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phoneEmail = document.getElementById('phone_email');
const password = document.getElementById('password');
const birthdate = document.getElementById('birthdate');
const cadastro = document.getElementById('facebook-register');


login.addEventListener('click', function () {
  alert(user.value);
});

cadastro.addEventListener('click', function () {
  if ((name.value === '') || (lastname.value === '') || (phoneEmail.value === '') || (password.value === '') || (birthdate.value === '')) {
    alert('Campos inválidos');
  }
});
