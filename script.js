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

document.querySelector('#facebook-register').addEventListener('click', function (event) {
  let validationError = '';
  const genderSelection = document.querySelectorAll('.form-input:checked');
  if (document.querySelector('#first-name').value === '' || document.querySelector('#first-name').value === null) {
    validationError = 'Campos inválidos';
  } else if (document.querySelector('#last-name').value === '' || document.querySelector('#last-name').value === null) {
    validationError = 'Campos inválidos';
  } else if (document.querySelector('#phone-email').value === '' || document.querySelector('#phone-email').value === null) {
    validationError = 'Campos inválidos';
  } else if (document.querySelector('#password').value === '' || document.querySelector('#password').value === null) {
    validationError = 'Campos inválidos';
  } else if (document.querySelector('#birthdate').value === '' || document.querySelector('#birthdate').value === null) {
    validationError = 'Campos inválidos';
  } else if (genderSelection.checked === false) {
    validationError = 'Campos inválidos';
  }

  if (validationError !== '') {
    const errorOutPut = document.createElement('p');
    errorOutPut.innerText = validationError;
    document.querySelector('.create-account').appendChild(errorOutPut);
    event.preventDefault();
  }
});

document.querySelector('.create-account').addEventListener('submit', function (event) {
  event.preventDefault();
  const formChildren = document.querySelector('.right-content').children;
  for (let count = 0; count < formChildren.length; count += 1) {
    formChildren[count].style.display = 'none';
  }

  const registeredName = document.querySelector('#first-name').value;
  const registeredLastName = document.querySelector('#last-name').value;
  const registeredPhoneMail = document.querySelector('#phone-email').value;
  const registeredBirthdate = document.querySelector('#birthdate').value;
  const registeredGender = document.querySelector('.form-input:checked').value;

  const showRegistered = document.createElement('p');
  showRegistered.innerText = `Olá, ${registeredName} ${registeredLastName}`;
  document.querySelector('.right-content').appendChild(showRegistered);
  const showPhoneMail = document.createElement('p');
  showPhoneMail.innerText = `${registeredPhoneMail} `;
  document.querySelector('.right-content').appendChild(showPhoneMail);
  const showDateOfBirth = document.createElement('p');
  showDateOfBirth.innerText = `${registeredBirthdate}`;
  document.querySelector('.right-content').appendChild(showDateOfBirth);
  const showGender = document.createElement('p');
  showGender.innerText = `${registeredGender}`;
  document.querySelector('.right-content').appendChild(showGender);
});
