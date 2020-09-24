const entrarBotao = document.querySelector('#button-login');
entrarBotao.addEventListener('click', function () {
  const emailOrTel = document.querySelector('#user-email-phone');

  alert(`Email ou telefone: ${emailOrTel.value}`);
});
