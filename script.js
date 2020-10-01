// events system
const callAlertValueInput = () => {
  const inputTextEmail = document.querySelector('input#user-email-phone');
  window.alert(inputTextEmail.value);
};

// Error messagens forms empty
const showMessagerErrorForm = () => {
  const pElement = document.querySelector('.errorField');
  if (pElement.classList.contains('isMensagerDisplayNone')) {
    pElement.classList.remove('isMensagerDisplayNone');
    setTimeout(() => {
      pElement.classList.add('isMensagerDisplayNone');
    }, 2000);
  }
};

/*
  // another way of writing the function
  const showMessagerErrorForm = (boolean) => {
  const pElementCurrent = document.querySelector('.errorField');

  if (boolean) {
    if (pElementCurrent) {
      pElementCurrent.remove();
    }
    const pElement = document.createElement('p');
    pElement.className = 'errorField';
    pElement.innerHTML = 'Campos inválidos';
    document.querySelector('.form-register').appendChild(pElement);
  }
};
 */
const validateFormInput = () => {
  const inputs = document.querySelectorAll('input[required]');
  let breakLoop = true;
  inputs.forEach((input) => {
    if (breakLoop) {
      if (!input.checkValidity()) {
        breakLoop = false;
        showMessagerErrorForm();
      }
    }
  });
};

const showInputGenderCustom = (event) => {
  const textInput = document.querySelector('input[name="gender-custom"]');
  const radioInputValue = event.target.value;
  if (radioInputValue === 'Personalizado') {
    if (textInput.classList.contains('isInputDisplayNone')) {
      textInput.classList.remove('isInputDisplayNone');
    }
  } else if (!textInput.classList.contains('isInputDisplayNone')) {
    textInput.classList.add('isInputDisplayNone');
  }
};

const controllerEventsClicks = (type) => {
  document.addEventListener(type, (event) => {
    const eventDataSet = event.target.dataset.click;
    switch (eventDataSet) {
      case 'alertButton':
        callAlertValueInput();
        break;
      case 'submit':
        validateFormInput();
        break;
      case 'gender':
        showInputGenderCustom(event);
        break;

      default:
        break;
    }
  });
};

const handleEventsController = (...types) => {
  types.forEach((type) => {
    switch (type) {
      case 'click':
        controllerEventsClicks(type);
        break;

      default:
        break;
    }
  });
};

const female = document.getElementById('Female');
const male = document.getElementById('Male');
const person = document.getElementById('Person');

function sexGender() {
  let sex = '';
  if (female.checked) {
    sex = 'Feminino';
  } else if (male.checked) {
    sex = 'Masculino';
  } else if (person.checked) {
    sex = 'personalizado';
  }
  return sex;
}

const cadastro = document.querySelector('#facebook-register');
const name = document.querySelector('input[name="firstname"]');
const lastName = document.querySelector('input[name="lastname"]');
const email = document.querySelector('input[name="phone_email"]');
const password = document.querySelector('input[name="password"]');
const birthdate = document.querySelector('input[name="birthdate"]');

cadastro.addEventListener('click', function (event) {
  event.preventDefault();
  const errorField = document.querySelector('.errorField');
  const confirm = {
    name: name.value,
    lastname: lastName.value,
    email: email.value,
    password: password.value,
    birthdate: birthdate.value,
    gender: sexGender(),
  };
  if ((confirm.name === '') || (confirm.lastname === '') || (confirm.email === '') || (confirm.password === '') || (confirm.birthdate === '')) {
    errorField.innerHTML = 'Campos inválidos';
  } else {
    document.querySelector('.right-content').innerHTML =
      `<p>Olá, ${confirm.name} ${confirm.lastname}</p>
    <p>${confirm.email}</p>
    <p>${confirm.birthdate}</p>
    <p>${confirm.gender}</p>`;
  }
});

window.onload = () => {
  handleEventsController('click');
};
