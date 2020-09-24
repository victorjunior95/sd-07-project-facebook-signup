const btnLogin = document.getElementById('button-login');

const userEmailPhone = document.getElementById('user-email-phone');

function alertLogin() {
  alert(userEmailPhone.value);
}

btnLogin.addEventListener('click', alertLogin);
