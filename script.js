const getBtnLogin = document.getElementById('button-login');
const getUserPhone = document.getElementById('user-email-phone');
let valuePhone = getUserPhone.value;
function alerta() {
  getUserPhone.addEventListener('keyup', function () {
    valuePhone = getUserPhone.value;
  });
  getBtnLogin.addEventListener('click', function () {
    alert(valuePhone);
  });
}

window.onload = alerta;
