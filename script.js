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
    const errorOutlet = document.createElement('p');
    errorOutlet.innerText = validationError;
    document.querySelector('.create-account').appendChild(errorOutlet);
    event.preventDefault();
  }
});

document.querySelector('.create-account').addEventListener('submit', function (event) {
  event.preventDefault();
  const formChildren = document.querySelector('.create-account').children;
  for (let count = 0; count < formChildren.length; count += 1) {
    formChildren[count].style.display = 'none';
  }
  const registeredGender = document.querySelector('.form-input:checked').id;
  const registeredName = document.querySelector('#first-name').value;
  const registeredLastName = document.querySelector('#last-name').value;
  const registeredPhoneMail = document.querySelector('#phone-email').value;
  const registeredBirthdate = document.querySelector('#birthdate').value;

  const showRegistered = document.createElement('p');
  showRegistered.innerHTML = `Olá, ${registeredName} ${registeredLastName} </br> Phone/Mail: ${registeredPhoneMail} </br> Date of Birth: ${registeredBirthdate} </br> Genero: ${registeredGender}`;
  document.querySelector('.create-account').appendChild(showRegistered);
});
