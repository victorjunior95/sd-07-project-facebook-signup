const loginButton = document.querySelector('#button-login');
const loginInfo = document.querySelector('#user-email-phone');
const genderCustom = document.querySelector('#Personalizado');
const subimitButton = document.querySelector('#facebook-register');

loginButton.addEventListener('click', function () {
  alert(loginInfo.value);
});

genderCustom.addEventListener('click', () => {
  const customDiv = document.querySelector('#custom');
  const customInput = document.createElement('input');
  customDiv.innerHTML = '';
  customInput.setAttribute('name', 'gender-custom');
  customInput.classList.add('form-control');
  customInput.placeholder = 'Gênero (opcional)';
  customDiv.appendChild(customInput);
});

subimitButton.addEventListener('click', function (event) {
  event.preventDefault();
  // const rightForm = document.querySelector('.open-account');
  const rightContent = document.querySelector('.right-content');
  const rightErrorMessage = document.querySelector('#error');
  const imputedValues = document.querySelectorAll('.verifica');
  const message = document.createElement('p');
  rightErrorMessage.innerHTML = '';
  message.innerText = 'Campos inválidos';
  message.classList.add('alert');
  for (let index = 0; index < imputedValues.length; index += 1) {
    if (imputedValues[index].value === '') {
      rightErrorMessage.appendChild(message);
    } else {
      const genderChecked = document.querySelectorAll('.custom-radio');
      for (let jindex = 0; jindex < genderChecked.length; jindex += 1) {
        if (genderChecked[jindex].checked) {
          rightContent.innerHTML = `<p> Olá, ${imputedValues[0].value} ${imputedValues[1].value} </p>
          <p>Email ou telefone: ${imputedValues[2].value} </p>
          <p>Data de nascimento: ${imputedValues[4].value} </p>
          <p>Genero: ${genderChecked[jindex].value} </p>`;
        }
      }
    }
  }
});
