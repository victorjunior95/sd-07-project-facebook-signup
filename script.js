const alertText = document.querySelector('#user-email-phone');
const alertButton = document.querySelector('#button-login');

alertButton.addEventListener('click', function (){
  alert(alertText.nodeValue);
});
