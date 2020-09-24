const login = document.getElementById('button-login');
const user = document.getElementById('user-email-phone');

login.addEventListener('click', function () {
  alert(user.value);
});
