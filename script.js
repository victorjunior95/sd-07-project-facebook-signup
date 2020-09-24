window.onload = function () {
  loginBtn = document.querySelector('#button-login')
  userEmailPhone = document.querySelector('#user-email-phone')
  userPassword = document.querySelector('#user-password')
  
  loginBtn.addEventListener('click', function () {
    alert(userEmailPhone.value)
  })
}