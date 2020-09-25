const btnLgn = document.getElementById('button-login');
const inputEmailPh = document.getElementById('user-email-phone');
const regForm = document.querySelector('#reg-form');
const regFormBtn = document.querySelector('#facebook-register');
const invalidMsg = document.querySelector('#invalid-msg');
const genderContainer = document.querySelector('#gender-container');
const genderF = genderContainer.querySelector('input[value="Feminino"]');
const genderM = genderContainer.querySelector('input[value="Masculino"]');
const genderCustom = genderContainer.querySelector('input[value="Personalizado"]');
const genderChecked = genderContainer.querySelector('input[name="genero"]:checked');
let customInput = document.querySelector('#custom-input');

btnLgn.addEventListener('click', function () {
  alert(inputEmailPh.value);
});

function preventSubmit() {
  regForm.addEventListener('submit', function (e) {
    invalidMsg.style.display = 'flex';
    e.preventDefault();
  });
}

function inputCheck() {
  const camposForm = regForm.getElementsByTagName('input');
  for (let i = 0; i < camposForm.length; i += 1) {
    if (camposForm[i].value === '') {
      invalidMsg.innerHTML = 'Campos inválidos';
      preventSubmit();
    }
  }
}

function genderCheck() {
  if (genderChecked === null) {
    invalidMsg.innerHTML = 'Escolha um gender';
    preventSubmit();
  }
}

function checkForm() {
  regFormBtn.addEventListener('click', function () {
    genderCheck();
    inputCheck();
  });
}

function addCustomGenderInput() {
  genderCustom.addEventListener('click', function () {
    customInput = document.querySelector('#custom-input');
    if (genderChecked !== null) {
      if (customInput === null) {
        const newCustomInput = document.createElement('input[name="gender"]');
        newCustomInput.id = 'custom-input';
        newCustomInput.name = 'gender-custom';
        newCustomInput.placeholder = 'Genero';
        newCustomInput.type = 'text'; // por default ja é text, mas eu quero especificar na msm
        genderContainer.appendChild(newCustomInput);
      }
    }
  });
}

function removeCustomGenderInput() { // pode dar erro com o cypress
  genderM.addEventListener('click', function () {
    customInput = document.querySelector('#custom-input');
    if (customInput !== null) {
      genderContainer.removeChild(customInput);
    }
  });

  genderF.addEventListener('click', function () {
    customInput = document.querySelector('#custom-input');
    if (customInput !== null) {
      const removeInput = genderContainer.lastChild;
      genderContainer.removeChild(removeInput);
    }
  });
}

window.onload = function () {
  checkForm();
  addCustomGenderInput();
  removeCustomGenderInput();
};
