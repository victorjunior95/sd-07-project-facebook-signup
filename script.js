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
  inputGender.name = 'gender-custom';
});

// Validar campos preenchidos com botão 'Cadastre-se 
// Baseado no trecho do código do 'herculesgabriel-project-facebook'
const registerButton = document.querySelector('#facebook-register');
registerButton.addEventListener('click', function (event) {
  event.preventDefault();

  const emptyInput = document.querySelectorAll('.new-account-form input');
  emptyInput.forEach(function (element) {
    if (element.value === '') {
      const invalidAlert = document.querySelector('#invalid-camp');
      invalidAlert.innerText = 'Campos inválidos';
    }
  });
  // Substituição do formulario com preenchimento válido
  if (document.querySelector('#invalid-camp').innerText === '') {
    const firstname = document.getElementsByName('firstname')[0].value;
    const lastname = document.getElementsByName('lastname')[0].value;
    const phoneEmail = document.getElementsByName('phone_email')[0].value;
    const birthdate = document.getElementsByName('birthdate')[0].value;
    let gender = '';
    const genderList = document.getElementsByName('gender');
    genderList.forEach((element) => {
      if (element.checked) {
        gender = element.value;
      }
    });
    const validContent = document.querySelector('.right-content');
    validContent.innerText = `Olá, ${firstname} ${lastname}!\n
      ${phoneEmail}\n
      ${birthdate}\n
      ${gender}`;
  }
});
