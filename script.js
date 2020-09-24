const login = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');

const name = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phoneEmail = document.getElementById('phone_email');
const password = document.getElementById('password');
const birthdate = document.getElementById('birthdate');
const cadastro = document.getElementById('facebook-register');
const personalizado = document.getElementById('genero');
const genderInput = document.querySelector('#input-personalizado');

login.addEventListener('click', function () {
  alert(user.value);
});

cadastro.addEventListener('click', function () {
  if ((name.value === '') || (lastname.value === '') || (phoneEmail.value === '') || (password.value === '') || (birthdate.value === '')) {
    alert('Campos inválidos');
  }
});

personalizado.addEventListener('click', function () {
  const input = document.createElement('input');
  input.setAttribute('name', 'gender-custom');
  input.setAttribute('placeholder', 'Gênero');
  genderInput.appendChild(input);
});
