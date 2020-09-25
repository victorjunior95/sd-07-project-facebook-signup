const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

function sexo() {
  const genderFeminine = document.getElementById('gender-feminine');
  const genderMale = document.getElementById('gender-male');
  const genderCustom = document.getElementById('gender-custom');
  if (genderFeminine) {
    return 'Feminino';
  } else if (genderMale) {
    return 'Masculino';
  }
    return 'Personalizado';
}

function validaCampos() {
  const firstName = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const phoneEmail = document.getElementById('phone_email');
  const password = document.getElementById('current-password');
  const inputBirthdate = document.getElementById('input-birthdate');

  let ehValido = false;

  if(firstName && lastName){
      ehValido = true;
  }
  if(phoneEmail && password){
    ehValido = true;
  }
  if(inputBirthdate && sexo()){
      ehValido = true;
  }

    if(!ehValido){
        document.getElementById('messager-user').innerText = 'Campos inválidos';
    }
}

document.getElementById('facebook-register').addEventListener('click', validaCampos);
