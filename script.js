const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function () {
  const text = userEmailPhone.value;
  alert(text);
});

let selectedGender = '';
const genderContainer = document.getElementById('gender-container');
genderContainer.addEventListener('click', function (event) {
  selectedGender = event.target.value;
});

const buttonRegister = document.getElementById('facebook-register');
buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const firstName = document.getElementById('firstname');
  const lastName = document.getElementById('lastname');
  const email = document.getElementById('phone_email');
  const birthDate = document.getElementById('birthdate');
  const rightContent = document.getElementById('right-content');
  const fields = document.querySelectorAll('#form2 input');
  const form = document.getElementById('form2');
  for (let index = 0; index < fields.length; index += 1) {
    if (fields[index].value === '') {
      const error = document.createElement('p');
      error.innerText = 'Campos inválidos';
      form.innerHTML = error;
      break;
    } else {
      rightContent.innerHTML = `Olá, ${firstName.value} ${lastName.value}.
      Seu email é ${email.value}.
      Sua data de nascimento é ${birthDate.value}.
      Seu gênero é ${selectedGender}`;
    }
  }
});

const other = document.getElementById('Personalizado');
other.addEventListener('click', function () {
  const newField = document.createElement('input');
  newField.type = 'text';
  newField.name = 'gender-custom';
  newField.placeholder = 'Gênero (opcional)';
  genderContainer.appendChild(newField);
});
