const checks = document.querySelectorAll('.check');
function required(event) {
  event.preventDefault();
  const erro = document.createElement('p');
  erro.innerText = 'Campos inválidos';
  for (let index = 0; index < checks.length; index += 1) {
    if (checks[index].value === '') {
      document.querySelector('.form-register').appendChild(erro);
    } else {
      checks[index].value = check[index].value;
    }
  }
}

document.querySelector('#facebook-register').addEventListener('click', required);

document.getElementById('button-login').addEventListener('click', function () {
  const emailValue = document.querySelector('#user-email-phone').value;
  alert(emailValue);
});
