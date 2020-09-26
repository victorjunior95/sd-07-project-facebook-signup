  const loginBtn = document.querySelector('#button-login');
  const userEmailPhone = document.querySelector('#user-email-phone');
  const submitButton = document.querySelector('#facebook-register');
  const fisrtName = document.querySelector('#firstName');
  const lastName = document.querySelector('#lastName');
  const phoneEmail = document.querySelector('#phoneEmail');
  const password = document.querySelector('#password');
  const birthDate = document.querySelector('#birthdate');
  let textChecked = true;

  const inputTextsValidation = () => {
    if (fisrtName.value === '' || lastName.value === '') {
      textChecked = false;
    }

    if (phoneEmail.value === '' || password.value === '' || birthDate.value === '') {
      textChecked = false;
    }
    return textChecked;
  };

  const femaleRadio = document.querySelector('#female');
  const maleRadio = document.querySelector('#male');
  const other = document.querySelector('#other');
  let radioChecked = false;

  const inputRadioValidation = () => {
    if (femaleRadio.checked || maleRadio.checked || other.checked) {
      radioChecked = true;
    }
    return radioChecked;
  };

  const validateForm = () => {
    event.preventDefault();
    inputTextsValidation();
    inputRadioValidation();
    const errorMessage = document.querySelector('#errorMessage');

    if (textChecked || radioChecked) {
      //
    } else {
      errorMessage.innerText = 'Campos inválidos';
    }
  };

  window.onload = function () {
    loginBtn.addEventListener('click', () => alert(userEmailPhone.value));
    submitButton.addEventListener('click', validateForm);
  };

};