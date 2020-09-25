const botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function () {
  const emailTelefone = document.querySelector('#user-email-phone').value;
  alert(emailTelefone);
});
const dayButton = document.querySelector('#day');
const monthButton = document.querySelector('#month');
const yearButton = document.querySelector('#year');

for (let indexDay = 1; indexDay <= 31; indexDay += 1) {
  const optionDay = document.createElement('option');
  optionDay.setAttribute('value', indexDay);
  optionDay.innerText = indexDay;
  dayButton.appendChild(optionDay);
}

for (let indexMonth = 1; indexMonth <= 12; indexMonth += 1) {
  const optionMonth = document.createElement('option');
  optionMonth.setAttribute('value', indexMonth);
  optionMonth.innerText = indexMonth;
  monthButton.appendChild(optionMonth);
}

for (let indexYear = 2020; indexYear >= 1905; indexYear -= 1) {
  const optionYear = document.createElement('option');
  optionYear.setAttribute('value', indexYear);
  optionYear.innerText = indexYear;
  yearButton.appendChild(optionYear);
}

const customButton = document.querySelector('#custom-button');
const genderOptions = document.querySelectorAll('.gender-options')[0];
customButton.addEventListener('change', function () {
  const customInput = document.createElement('input');
  customInput.setAttribute('type', 'text');
  customInput.setAttribute('name', 'gender-custom');
  customInput.setAttribute('placeholder', 'Gênero (opcional)');
  genderOptions.appendChild(customInput);
});
