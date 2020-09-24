const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const emailTel = document.getElementById('user-email-phone').value;
  window.alert(emailTel);
});

function createTextField() {
  const newField = document.createElement('input');
  const buttonRegister = document.querySelector('#facebook-register');
  const form = document.querySelector('.open-account');
  newField.type = 'text';
  newField.name = 'gender-custom';
  newField.placeholder = 'Gênero (opcional)';
  form.insertBefore(newField, buttonRegister);
}

const buttonCustom = document.getElementById('custom');
buttonCustom.addEventListener('click', createTextField);

document.getElementById('birthdate').DatePickerX.init({ format: 'dd/mm/yyyy' });
