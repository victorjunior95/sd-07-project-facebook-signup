const btnLogin = document.getElementById('button-login');
btnLogin.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

const allInputs = document.querySelectorAll('.required');
const btnRegister = document.querySelector('#facebook-register');
// função para saber se tem algum input vazio
function emptyInput() {
  const errorMessage = document.createElement('p');
  document.querySelector('.cadastro').appendChild(errorMessage);
  for (let i = 0; i < allInputs.length; i += 1) {
    if (allInputs[i].value === '') {
      errorMessage.innerText = 'Campos inválidos';
    }
  }
}
btnRegister.addEventListener('click', emptyInput); // ao clicar faz a verificação

function genderCostum() {
  const personalizado = document.querySelector('.personalizado');
  if (personalizado.checked) {
    const gender = document.createElement('input');
    gender.name = 'gender-custom';
    gender.placeholder = 'Gênero (opcional)';
    document.querySelector('.input-gender').appendChild(gender);
  }
}
// referência http://devfuria.com.br/javascript/manipulando-radios-buttons-com-javascript/
btnRegister.addEventListener('click', genderCostum);
