
const alertButton = document.querySelector('#button-login');
alertButton.addEventListener('click', function (event) {
  event.preventDefault();
  const flash = document.querySelector('#user-email-phone').value;
  alert(flash);
});
