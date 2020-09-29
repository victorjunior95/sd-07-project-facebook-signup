const buttonLog = document.querySelector('#button-login');

buttonLog.addEventListener('click', function alertMensagem() {
  const emailOrFone = document.getElementById('user-email-phone');
  alert(emailOrFone.value);
});


const genderSelect = document.querySelector('#custom');
const customDiv = document.querySelector('.custom-div');

genderSelect.addEventListener('click', function () {
  customDiv.innerHTML = '';
  const inputCustom = document.createElement('input');
  inputCustom.name = 'gender-custom';
  inputCustom.placeholder = 'Gênero (opcional)';
  customDiv.appendChild(inputCustom);
});
