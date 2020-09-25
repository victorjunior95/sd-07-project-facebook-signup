function alertEmailOrPhone() {
  const emailOrPhone = document.getElementById('user-email-phone');

  alert(emailOrPhone.value);
}

const authenticationButton = document.getElementById('button-login');

authenticationButton.addEventListener('click', alertEmailOrPhone);

const buttonRadio = document.querySelector('#personalizado');
const genderCustom = document.getElementById('gender-custom');

buttonRadio.addEventListener('click', function () {
  genderCustom.setAttribute('type', 'text');
});
