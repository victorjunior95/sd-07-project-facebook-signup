const senha = document.querySelector("#user-password");
const user = document.querySelector("#user-email-phone");
const button = document.querySelector("#button-login");

button.addEventListener(`click`, function() {
  alert(user.value);
});
