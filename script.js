const signIn = document.getElementById('button-login');
const emailPhoneInput = document.getElementById('user-email-phone');

signIn.addEventListener('click', () => {
  alert(emailPhoneInput.value);
});
