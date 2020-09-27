const button = document.querySelector('#button-login');

button.addEventListener('click', function () {
  const userLogin = document.querySelector('#user-email-phone').value;
  alert(userLogin);
});
