const btnLogin = document.getElementById('button-login');

const userEmailPhone = document.getElementById('user-email-phone');

const selectGenderCustom = document.getElementById('Personalizado');

const selectGenderFeminine = document.getElementById('Feminino');

const selectGenderMale = document.getElementById('Masculino');

function alertLogin() {
  alert(userEmailPhone.value);
}

function customHides() {
  document.getElementById('gender-custom').hidden = true;
}

btnLogin.addEventListener('click', alertLogin);

selectGenderCustom.addEventListener('click', function () {
  document.getElementById('gender-custom').hidden = false;
});

selectGenderFeminine.addEventListener('click', customHides);

selectGenderMale.addEventListener('click', customHides);
