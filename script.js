function alertEmailOrPhone() {
  const emailOrPhone = document.getElementById('user-email-phone');

  alert(emailOrPhone.value);
}

const genderCustom = document.querySelector('.gender-custom');

function createCustom() {
  genderCustom.innerHTML = '';
  const input = document.createElement('input');
  input.setAttribute('name', 'gender-custom');
  input.placeholder = 'Gênero (opcional)';
  genderCustom.appendChild(input);
}

const authenticationButton = document.getElementById('button-login');
const buttonRadio = document.querySelector('#personalizado');

authenticationButton.addEventListener('change', alertEmailOrPhone);

buttonRadio.addEventListener('click', createCustom);
