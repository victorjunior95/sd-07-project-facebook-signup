const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  const text = userEmailPhone.value;
  alert(text);
});
