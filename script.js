function plotInvalid() {
  const formField = document.querySelector('.create-account');
  const msgError = document.createElement('p');
  msgError.textContent = 'Campos inválidos';
  formField.appendChild(msgError);
}

function plotText() {
  const formField = document.querySelector('.create-account');
  const formValues = new FormData(formField);
  const boxText = document.querySelector('.right-content');
  boxText.innerHTML = '';
  boxText.innerHTML = `<p> Olá, ${formValues.get('firstname')} ${formValues.get('lastname')}
  ${formValues.get('phone_email')} ${formValues.get('birthdate')} ${formValues.get('gender')}
  </p>`;
}

function submitAction(verify) {
  if (verify) {
    plotText();
  } else {
    plotInvalid();
  }
}

function handleForm(event) {
event.preventDefault();
}

function createCustomGender() {
  const genderCustom = document.querySelector('.hidden-input');
  genderCustom.innerHTML = '<input name="gender-custom" placeholder="Gênero (opcional)" type="text">';
}

const btnLogin = document.querySelector('#button-login');
const formElements = document.querySelectorAll('.create-account [name]');
const btnFormSubmit = document.querySelector('#facebook-register');
const btnCustomGender = document.querySelector('#Personalizado');
const formCreate = document.querySelector('.create-account');

formCreate.addEventListener('submit', handleForm);

btnCustomGender.addEventListener('click', createCustomGender);

btnLogin.addEventListener('click', () => {
  const emailValue = document.querySelector('#user-email-phone');
  alert(emailValue.value);
});

btnFormSubmit.addEventListener('click', () => {
  let verifyElements = true;
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].validity.valid === false) {
      verifyElements = false;
      break;
    }
  }
  submitAction(verifyElements);
});
