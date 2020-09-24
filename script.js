const loginBtn = document.querySelector('#button-login');
loginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const emailInput = document.querySelector('#user-email-phone').value;
  alert(`${emailInput}`);
});
