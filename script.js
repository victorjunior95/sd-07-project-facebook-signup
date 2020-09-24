const loginBtn = document.querySelector('#button-login');
loginBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let emailInput = document.querySelector('#user-email-phone').value;
  let passwordInput = document.querySelector('#user-password').value;
  alert(emailInput + ' ' + passwordInput);
});
