const login = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');

const name = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phoneEmail = document.getElementById('phone_email');
const password = document.getElementById('password');
const birthdate = document.getElementById('birthdate');
const feminino = document.getElementById('feminino');
const masculino = document.getElementById('masculino');
const personalizado = document.getElementById('genero');
const cadastro = document.getElementById('facebook-register');
const genderInput = document.querySelector('#input-personalizado');

function getGender() {
  let gender = '';
  if (feminino.checked) {
    gender = 'Feminino';
  } else if (masculino.checked) {
    gender = 'Masculino';
  } else if (personalizado.checked) {
    gender = 'Personalizado';
  }
  return gender;
}

login.addEventListener('click', function () {
  alert(user.value);
});

cadastro.addEventListener('click', function (event) {
  event.preventDefault();
  const spanInvalid = document.querySelector('#invalid');
  const person = {
    name: name.value,
    lastname: lastname.value,
    phoneEmail: phoneEmail.value,
    password: password.value,
    birthdate: birthdate.value,
    gender: getGender(),
  };
  if ((person.name === '') || (person.lastname === '') || (person.phoneEmail === '') || (person.password === '') || (person.birthdate === '')) {
    spanInvalid.innerHTML = 'Campos inválidos';
  } else {
    document.querySelector('.right-content').innerHTML = `<p>Olá, ${person.name} ${person.lastname}</p>
    <p>${person.phoneEmail}</p>
    <p>${person.birthdate}</p>
    <p>${person.gender}</p>`;
  }
});

personalizado.addEventListener('click', function () {
  const input = document.createElement('input');
  input.setAttribute('name', 'gender-custom');
  input.setAttribute('placeholder', 'Gênero');
  genderInput.appendChild(input);
});
