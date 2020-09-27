const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const user = document.getElementById('user-email-phone').value;
  alert(user);
});

const genderRadio = document.getElementsByClassName('gender');

genderRadio[0].addEventListener('click', function() {
  const genderText = document.getElementById('gender-text');
  genderText.style.display = "none";
})

genderRadio[1].addEventListener('click', function() {
  const genderText = document.getElementById('gender-text');
  genderText.style.display = "none";
})

genderRadio[2].addEventListener('click', function() {
  const genderText = document.getElementById('gender-text');
  genderText.style.display = "block";
})