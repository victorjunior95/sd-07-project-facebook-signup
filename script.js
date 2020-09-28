const loginButton = document.querySelector('#button-login');
const loginInfo = document.querySelector('#user-email-phone');
const genderCustom = document.querySelector('#Personalizado');
const subimitButton = document.querySelector('#facebook-register');

loginButton.addEventListener('click', function () {
  alert(loginInfo.value);
});

genderCustom.addEventListener('click', () => {
  const customInput = document.createElement('input');
  customInput.setAttribute('name', 'gender-custom');
  customInput.classList.add('form-control');
  customInput.placeholder = 'Gênero (opcional)';
  document.querySelector('#custom').appendChild(customInput);
});

subimitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const rightForm = document.querySelector('.open-account');
  const rightContent = document.querySelector('.right-content');
  const valoresInput = document.querySelectorAll('.verifica');
  const mensagem = document.createElement('p');
  rightForm.appendChild(mensagem);
  for (let index = 0; index < valoresInput.length; index += 1) {
    if (valoresInput[index].value === '') {
      mensagem.innerText = 'Campos inválidos';
    } else {
      const genderChecked = document.querySelectorAll('.custom-radio');
      for (let jindex = 0; jindex < genderChecked.length; jindex += 1) {
        if (genderChecked[jindex].checked) {
          rightContent.innerHTML = `Olá, ${valoresInput[0].value} ${valoresInput[1].value}
          ${valoresInput[2].value}
          ${valoresInput[4].value} ${genderChecked[jindex].value}`;
        }
      }
    }
  }
});
