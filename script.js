const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const user = document.getElementById('user-email-phone').value;
  alert(user);
});

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', function () {
  const formClass = document.getElementById('registration-form');
  console.log(formClass.children);
});