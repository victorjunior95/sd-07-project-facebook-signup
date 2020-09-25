// para teste
const enterButton = document.querySelector('#button-login');
const inputValue = document.querySelector('#user-email-phone');

enterButton.addEventListener('click', function () {
  alert(inputValue.value);
});
