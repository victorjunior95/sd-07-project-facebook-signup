function alertLogin() {
  const buttonForm = document.querySelector('#button-login');
  const loginInput = document.querySelector('#user-email-phone');

  buttonForm.addEventListener('click', function () {
    alert(loginInput.value);
  });
}

function registerAlert() {
  const rightContentInputs = document.querySelector('#sign-up-container').querySelectorAll('input');
  const buttonRegister = document.querySelector('#facebook-register');

  buttonRegister.addEventListener('click', function () {
    rightContentInputs.forEach((item) => {
      const requiredContainer = document.querySelector('.required-alert');

      item.required = 'required';
      if (item.value === '') {
        requiredContainer.innerText = 'Campos inválidos';
      }
    });
  });
}

function createInputGender() {
  const genderOptions = document.querySelector('#other');
  const genderContainer = document.querySelector('.gender-container');

  genderOptions.addEventListener('click', function () {
    const divOtherGender = document.createElement('div');
    const inputOtherGender = document.createElement('input');

    inputOtherGender.name = 'gender-custom';
    inputOtherGender.placeholder = 'Gênero (opcional)';
    inputOtherGender.required = 'required';

    divOtherGender.appendChild(inputOtherGender);
    genderContainer.appendChild(divOtherGender);
  });
}
// const sectionRightContainer

window.onload = function () {
  alertLogin();
  createInputGender();
  registerAlert();
};
