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

const getStorageInputFormValue = () => {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `<h2>Olá, ${localStorage.getItem('firstname')}
  ${localStorage.getItem('lastname')}</h2>
  <p>${localStorage.getItem('phone_email')}</p>
  <p>${localStorage.getItem('birthdate')}</p>
  <p>${localStorage.getItem('gender')}</p>`;
};

const setStorageInputFormValue = (input) => {
  if (input.type !== 'radio') {
    localStorage.setItem(input.name, input.value);
  } else if (input.checked) {
    localStorage.setItem(input.name, input.value);
  }
};

const validateFormInput = () => {
  const inputs = document.querySelectorAll('.form-register input');
  let boolean = true;
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      boolean = false;
      showMessagerErrorForm();
    }
    setStorageInputFormValue(input);
  });
  return boolean;
};

const logFormDisplay = () => {
  if (validateFormInput()) {
    getStorageInputFormValue();
  }
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
        logFormDisplay();
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

window.onload = () => {
  handleEventsController('click');
};
