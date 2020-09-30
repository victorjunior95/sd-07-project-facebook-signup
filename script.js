// events system
const callAlertValueInput = () => {
  const inputTextEmail = document.querySelector('input#user-email-phone');
  window.alert(inputTextEmail.value);
};

// Error messagens forms empty
const showMessagerErrorForm = () => {
  const pElement = document.querySelector('.errorField');
  if (pElement.classList.contains('isMensager')) {
    pElement.classList.remove('isMensager');
    setTimeout(() => {
      pElement.classList.add('isMensager');
    }, 5000);
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
