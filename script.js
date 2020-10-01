const buttonLogin = document.querySelector('button');
const buttonSignUp = document.getElementById('facebook-register');
const selectOtherGender = document.querySelector('#other');
let counterEmptyField = 0;

buttonLogin.addEventListener('click', function () {
  const login = document.querySelector('input');
  alert(login.value);
  login.innerHTML = '';
});

const formCheck = () => {
  const formControl = document.querySelectorAll('#sign-up-form input');
  formControl.forEach(function (form) {
    if (form.value === '' || (form.type === 'radio') !== form.checked) {
      counterEmptyField += 1;
    }
  });
};

const helloUser = () => {
  const rightContent = document.querySelector('#right-content');
  rightContent.innerHTML = '';
};

buttonSignUp.addEventListener('click', (e) => {
  e.preventDefault();
  formCheck();

  if (counterEmptyField > 2) {
    const form = document.querySelector('#sign-up-form');

    const p = document.createElement('p');
    form.appendChild(p).innerText = 'Campos inválidos';
  } else {
    helloUser();
  }
});

selectOtherGender.addEventListener('click', () => {
  const divGender = document.querySelector('#other-gender');
  const inputGender = document.createElement('input');
  if (!divGender.firstChild) {
    divGender.appendChild(inputGender);
    inputGender.setAttribute('name', 'gender-custom');
    inputGender.setAttribute('placeholder', 'Gênero (opcional)');
  }
});
