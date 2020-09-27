const btLogin = document.querySelector('#button-login');

btLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone').value;
  alert(login);
});

const radioPerso = document.querySelector('#Personalizado');
const inputPerso = document.querySelector('#inputPersonalizado');
radioPerso.addEventListener('click', () => {
  inputPerso.innerHTML = '<input type="text" name="gender-custom" placeholder="Gênero (opcional)">';
});


const btRegister = document.querySelector('#facebook-register');
const formGroup = document.querySelector('#form-group');
btRegister.addEventListener('click', (event) => {
  event.preventDefault();
  const invalidFields = document.createElement('div');
  formGroup.appendChild(invalidFields);
  const formGroupInputs = [
    formGroup.firstname.value,
    formGroup.lastname.value,
    formGroup.phone_email.value,
    formGroup.birthdate.value,
    formGroup.password.value,
    formGroup.gender.value,
  ];
  for (let index = 0; index < formGroupInputs.length; index += 1) {
    if (formGroupInputs[index] === '') {
      invalidFields.innerText = 'Campos inválidos';
      break;
    } else {
      const checkedFields = `Olá, ${formGroup.firstname.value} ${formGroup.lastname.value}
      ${formGroup.phone_email.value} ${formGroup.birthdate.value} ${formGroup.gender.value}`;
      invalidFields.innerHTML = `${checkedFields}`;
    }
  }
});
