buttonEntrar = document.querySelector("#button-login");
emailOrTel = document.querySelector("#user-email-phone");

buttonEntrar.addEventListener("click", function () {
  alert(emailOrTel.value);
});
