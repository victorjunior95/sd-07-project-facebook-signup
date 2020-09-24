window.onload = function () {
  const loginBtn = document.querySelector('#button-login');
  const userEmailPhone = document.querySelector('#user-email-phone');

  loginBtn.addEventListener('click', function () {
    alert(userEmailPhone.value);
  });
};
