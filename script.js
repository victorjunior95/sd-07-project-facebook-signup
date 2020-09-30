const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  const text = userEmailPhone.value;
  alert(text);
});

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const fields = document.querySelectorAll('#form2 input');
  for (let index = 0; index < fields.length; index += 1) {
    if (fields[index].value === '') {
      const form = document.getElementById('form2');
      form.innerHTML = 'Campos inválidos';
    }
  }
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const fullName = `${firstName} ${lastName}`;
  const email = document.getElementById('phone_email').value;
  const birthDate = document.getElementById('birthdate').value;
  const gender = document.querySelectorAll('input .gender').value;
  const rightContent = document.getElementById('right-content');
  rightContent.innerHTML = `Olá, ${fullName}.
  Seu email é ${email}.
  Sua data de nascimento é ${birthDate}.
  Seu gênero é ${gender}`;
});

const other = document.getElementById('Personalizado');
other.addEventListener('click', function () {
  const newField = document.createElement('input');
  newField.type = 'text';
  newField.name = 'gender-custom';
  newField.placeholder = 'Gênero (opcional)';
  const genderContainer = document.getElementById('gender-container');
  genderContainer.appendChild(newField);
});
