const buttonLogin = document.getElementById('button-login');
const userData = document.getElementById('user-email-phone');
const fname = document.getElementsByName('firstname')[0].value;
const lname = document.getElementsByName('lastname')[0].value;
const contact = document.getElementsByName('phone_email')[0].value;
const pass = document.getElementsByName('password')[0].value;
const data = document.getElementsByName('birthdate')[0].value;
const sex = document.getElementsByName('gender');
let sexvar = "";

sex[0].addEventListener('click', function () {
  sexvar = "Feminino";
})

sex[1].addEventListener("click", function () {
  sexvar = "Masculino";
})

sex[2].addEventListener("click", function () {
  sexvar = "Outros";
})

buttonLogin.addEventListener('click', function () {
  if (condition) {

  } else {

  }

  alert(userData.value);
});
