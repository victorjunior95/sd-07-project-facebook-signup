const alertText = document.querySelector('#user-email-phone');
const alertButton = document.querySelector('#button-login');

function sendAlert() {
  alert(alertText);
}

alertButton.addEventListener('click', sendAlert());
