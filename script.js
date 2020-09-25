const btButtonLogin = document.getElementById('button-login');
const inpUserEmailPhone = document.getElementById('user-email-phone');
btButtonLogin.addEventListener('click', function () {
  alert(inpUserEmailPhone.value);
});
