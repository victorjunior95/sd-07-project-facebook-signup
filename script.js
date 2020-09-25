const buttonLogin = document.getElementById('button-login');
const inputValue = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(inputValue.value);
});

const buttonCustomGender = document.getElementById('personalizado');
const genderBox = document.getElementById('gender-box');

buttonCustomGender.addEventListener('click', function () {
  const genderCustom = document.createElement('input');
  genderCustom.setAttribute('name', 'gender-custom');
  genderCustom.setAttribute('placeholder', 'Gênero');
  genderBox.appendChild(genderCustom);
});
