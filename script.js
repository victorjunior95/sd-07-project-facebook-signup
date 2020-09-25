// events system
const callAlertValueInput = () => {
  const inputTextEmail = document.querySelector('input#user-email-phone');
  window.alert(inputTextEmail.value);
};

const controllerEventsClicks = (type) => {
  document.addEventListener(type, (event) => {
    const eventDataSet = event.target.dataset.click;
    switch (eventDataSet) {
      case 'alertButton':
        callAlertValueInput();
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
