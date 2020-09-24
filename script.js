const buttonEnter = document.querySelector('#button-login');
buttonEnter.addEventListener( 'click', function() {
  const emailPhone = document.querySelector('#user-email-phone');
  const password = document.querySelector('#user-passowrd');
  alert(emailPhone.value);
});
