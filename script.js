const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(user.value);
});

const radioCustomGender = document.getElementsByName('gender')[2];
radioCustomGender.addEventListener('click', function () {
  let newAccForm = document.querySelector('.new-account');
  let genderCustom = document.createElement('input');
  genderCustom.type = "text";
  genderCustom.name = "gender-custom";
  genderCustom.placeholder = "Gênero (opcional)";
  newAccForm.appendChild(genderCustom);
  newAccForm.insertBefore(genderCustom,  newAccForm.children[19]);
});


const inputFirstName = document.getElementsByName('firstname')[0];
const inputLastName = document.getElementsByName('lastname')[0];
const inputPhoneEmail = document.getElementsByName('phone_email')[0];
const inputPassword = document.getElementsByName('password')[0];
const inputBirthdate = document.getElementsByName('birthdate')[0];
const inputGender = document.getElementsByName('gender');
const btnSignUp = document.querySelector('#facebook-register');


btnSignUp.addEventListener('click', function() {
  let genderChecked = false;
  if (inputGender[0].checked || inputGender[1].checked || inputGender[2].checked) {
        genderChecked = true;
  }
    if (inputFirstName.value === null || inputLastName.value === null || inputPhoneEmail.value === null || inputPassword.value === null || inputBirthdate.value === null || genderChecked === false) {
        alert('Campos inválidos');
    }
});
