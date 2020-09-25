const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});


// 18 - Validar se todos os campos foram preenchidos ao clicar no botão "Cadastre-se"
// Pontos importantes:

// Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido

const buttonRegister = document.getElementById('facebook-register');
const nameFormRegister = document.getElementById('name-form-register');
const lastNameFormRegister = document.getElementById('last-name-form-register');
const phoneEmailFormRegister = document.getElementsById('phone_email')[0];
const passwordFormRegister = document.getElementsById('password')[0];
const birthdateFormRegister = document.getElementsById('birthdate')[0];
const genderFormRegister = document.getElementsById('gender'); // [index]

buttonRegister.addEventListener('click', function () {
  console.log(nameFormRegister.value);
  // console.log(lastNameFormRegister.value);
  // console.log(phoneEmailFormRegister.value);
  // console.log(passwordFormRegister.value);
  // console.log(birthdateFormRegister.value);
  // console.log(genderFormRegister.value);
});

// pego todos os elementos inseridos no form
// const formRegister = document.getElementsByClassName('form-register');
// criar um for para pegar os valores de cada elemento

// se o valor de algum for '', exibir a msg 'Campos inválidos'

