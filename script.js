// Cria um alerta com o "email ou telefone"
const button = document.querySelector('#button-login');
const inputEmail = document.querySelector('#user-email-phone');

button.addEventListener('click', function alertEmail() {
  alert(inputEmail.value);
});

// Cria campo de texto para o gênero personalizado
const personalizedGender = document.querySelector('#personalized');
const selectGender = document.querySelector('#select-gender-textbox');
const inputGender = document.createElement('input');

personalizedGender.addEventListener('click', function () {
  selectGender.appendChild(inputGender);
  inputGender.type = 'text';
  inputGender.placeholder = 'Gênero (opcional)';
  inputGender.className = 'gender-option';
});
