const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  const text = userEmailPhone.value;
  alert(text);
});

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', function () {
  const fields = document.getElementsByTagName('input');
  for (let index = 0; index < fields.length; index += 1) {
    if (fields[index].value === '') {
      const form = document.getElementById('form2');
      form.innerHTML = 'Campos Inválidos';
    }
  }
});
