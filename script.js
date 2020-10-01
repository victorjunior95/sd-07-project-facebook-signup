

const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  const text = userEmailPhone.value;
  alert(text);
});

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const firstName = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const email = document.getElementById('phone_email');
  const birthDate = document.getElementById('birthdate');
  const gender = document.querySelectorAll('input .gender');
  const rightContent = document.getElementById('right-content');
  const fields = document.querySelectorAll('#form2 input');
  for (let index = 0; index < fields.length; index += 1) {
    if (fields[index].value === '') {
      const form = document.getElementById('form2');
      const error = document.createElement('p');
      error.innerText = 'Campos inválidos';
      form.appendChild(error);
      break;
    } else {
      rightContent.innerHTML = `Olá, ${firstName.value} ${lastName.value}.
      Seu email é ${email.value}.
      Sua data de nascimento é ${birthDate.value}.
      Seu gênero é ${gender.value}`;
    }
  }
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
