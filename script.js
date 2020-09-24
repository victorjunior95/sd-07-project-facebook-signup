const loginButton = document.querySelector('#button-login');

loginButton.addEventListener('click', function () {
  const inputValue = document.querySelector('#user-email-phone').value;
  alert(inputValue);
});
