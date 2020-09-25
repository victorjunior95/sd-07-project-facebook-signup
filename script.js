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

  buttonRegister.addEventListener('click', function (event) {
    event.preventDefault();

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

    inputOtherGender.required = 'required';
    inputOtherGender.placeholder = 'Gênero (opcional)';
    inputOtherGender.name = 'gender-custom';

    if (genderContainer.children.length === 3) {
      genderContainer.removeChild(genderContainer.lastChild);
    }

    divOtherGender.appendChild(inputOtherGender);
    genderContainer.appendChild(divOtherGender);

    // console.log(genderContainer.children.length);
  });
}

const newInformationUser = () => {
  const rightContainer = document.querySelector(".right-content");
  const buttonSend = document.querySelector("#facebook-register");
  const name = document.querySelector(".name");

  const newMemberContainer = document.createElement("div");
  const paragraphy = document.createElement("p");

  buttonSend.addEventListener("click", () => {
    paragraphy.innerText = `Olá, ${name.value}`;
    newMemberContainer.appendChild(paragraphy);
  
    rightContainer.innerHTML = paragraphy.innerText;
    console.log(name.value);
  })
}

window.onload = function () {
  alertLogin();
  createInputGender();
  registerAlert();
  newInformationUser();
};
