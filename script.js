function alertEmailOrPhone() {
  const emailOrPhone = document.getElementById('user-email-phone');

  alert(emailOrPhone.value);
}

const authenticationButton = document.getElementById('button-login');

authenticationButton.addEventListener('click', alertEmailOrPhone);
