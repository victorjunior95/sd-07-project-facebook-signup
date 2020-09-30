// function clickButton() {
//   const userEmailPhone = document.getElementById('user-email-phone').value;
//   if (userEmailPhone !== '') {
//     alert(userEmailPhone);
//   }
// }
// const button = document.getElementById('button-login');
// button.addEventListener('click', clickButton); 

const buttonLogin = document.querySelector('#button-login');
const emailValidation = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(emailValidation.value);
});