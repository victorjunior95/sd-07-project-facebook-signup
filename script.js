const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

function sexo() {
  const genderFeminine = document.getElementById('gender-feminine');
  const genderMale = document.getElementById('gender-male');
  if (genderFeminine) {
    return 'Feminino';
  } else if (genderMale) {
    return 'Masculino';
  }
  return 'Personalizado';
}

function validaCampos() {
  sexo();
  document.getElementById('messager-user').textContent = 'Campos inválidos';
}

document.getElementById('facebook-register').addEventListener('click', validaCampos);
