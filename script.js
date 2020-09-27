
const alertButton = document.querySelector('#button-login');
alertButton.addEventListener('click', function (event) {
  event.preventDefault();
  const flash = document.querySelector('#user-email-phone').value;
  alert(flash);
});

const addCustomGender = document.querySelector('#custom');
addCustomGender.addEventListener('click', function () {
  if (document.querySelector('.setup-gender').lastElementChild.id !== 'custom-gender') {
    const customGenderInput = document.createElement('input');
    customGenderInput.type = 'text';
    customGenderInput.name = 'gender-custom';
    customGenderInput.id = 'custom-gender';
    customGenderInput.placeholder = 'Gênero (opcional)';
    const containerGender = document.querySelector('.setup-gender');
    containerGender.appendChild(customGenderInput);
  }
});

document.querySelector('#facebook-register').addEventListener('click', function () {
  const genderSelection = document.querySelector('.setup-gender').children;
  let validGender = 'false';
  for (let count = 0; count < genderSelection.length; count += 1) {
    if (genderSelection[count].checked === 'true') {
      validGender = 'true';
    }
  }

  if (
    document.querySelector('#phone-email').value !== '' &&
    document.querySelector('#password').value !== '' &&
    document.querySelector('#label-birthdate').value !== '' &&
    document.querySelector('#birthdate').value !== '' &&
    validGender === 'true'
  );
  else {
    alert('Campos inválidos');
  }
});
