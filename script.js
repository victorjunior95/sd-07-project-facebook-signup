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
        console.log(input)
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


window.onload = () => {
  handleEventsController('click');
};
