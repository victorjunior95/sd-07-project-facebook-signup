const buttonLogin = document.getElementById('button-login');
const inputValue = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(inputValue.value);
});

const buttonCustomGender = document.getElementById('personalizado');
const formBox = document.getElementById('form-box');
const facebookRegister = document.getElementById('facebook-register');

buttonCustomGender.addEventListener('click', function () {
  const genderCustom = document.createElement('input');
  genderCustom.className = 'form-input-big';
  genderCustom.setAttribute('name', 'gender-custom');
  genderCustom.setAttribute('placeholder', 'Gênero');
  formBox.insertBefore(genderCustom, facebookRegister);
});
