let botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function() {
  let emailTelefone = document.querySelector('#user-email-phone').value;
  alert(emailTelefone);
});

let dayButton = document.querySelector('#day');
let monthButton = document.querySelector('#month');
let yearButton = document.querySelector('#year');

for(let indexDay = 1; indexDay <= 31; indexDay += 1){
  let optionDay = document.createElement('option');
  optionDay.setAttribute('value', indexDay);
  optionDay.innerText = indexDay;
  dayButton.appendChild(optionDay);
};

for(let indexMonth = 1; indexMonth <= 12; indexMonth += 1){
  let optionMonth = document.createElement('option');
  optionMonth.setAttribute('value', indexMonth);
  optionMonth.innerText = indexMonth;
  monthButton.appendChild(optionMonth);
};

for(let indexYear = 2020 ; indexYear >= 1905; indexYear -= 1){
  let optionYear = document.createElement('option');
  optionYear.setAttribute('value', indexYear);
  optionYear.innerText = indexYear;
  yearButton.appendChild(optionYear);
};

