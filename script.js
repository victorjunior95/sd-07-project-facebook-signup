let alertText = document.querySelector("#user-email-phone");
let alertButton = document.querySelector("#button-login");

alertButton.addEventListener("click", sendAlert());

function sendAlert() {
  alert(alertText);
}
