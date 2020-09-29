function clickButton() {
  const userEmailPhone = document.getElementById('user-email-phone').value;
  if (userEmailPhone !== '') {
    alert(userEmailPhone);
  }
}
const button = document.getElementById('button-login');
button.addEventListener('click', clickButton);
