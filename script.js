const btnLgn = document.getElementById('button-login');
const inputEmailPh = document.getElementById('user-email-phone');
const regForm = document.querySelector('#reg-form');
const regFormBtn = document.querySelector('#facebook-register');
const invalidMsg = document.querySelector('#invalid-msg');
const genderContainer = document.querySelector('#gender-container');
const genderF = genderContainer.querySelector('input[value="Feminino"]');
const genderM = genderContainer.querySelector('input[value="Masculino"]');
const genderCustom = genderContainer.querySelector('input[value="Personalizado"]');
let genderChecked = genderContainer.querySelector('input[name="gender"]:checked');
let customInput = document.querySelector('#custom-input');
const rightContent = document.querySelector('.right-content');

btnLgn.addEventListener('click', function () {
  alert(inputEmailPh.value);
});

function showData() {
  const camposForm = regForm.getElementsByTagName('input');
  genderChecked = genderContainer.querySelector('input[name="gender"]:checked');
  rightContent.innerHTML = `Olá, ${camposForm[0].value}  ${camposForm[1].value}<br>  ${camposForm[2].value}<br> ${camposForm[4].value}<br> ${genderChecked.value}`;
}

function preventSubmit() {
  regForm.addEventListener('submit', function (e) {
    invalidMsg.style.display = 'flex';
    e.preventDefault();
  });
}

function inputCheck() {
  let res 
  const camposForm = regForm.getElementsByTagName('input');
  for (let i = 0; i < camposForm.length; i += 1) {
    if (camposForm[i].value === '') {
      invalidMsg.innerHTML = 'Campos inválidos';
      preventSubmit();
      res = false;
    }
  }
  return res
}

function genderCheck() {
  let res
  if (genderChecked === null) {
    invalidMsg.innerHTML = 'Escolha um gender';
    preventSubmit();
    res = false;
  }
  return res
}

function checkForm() {
  regFormBtn.addEventListener('click', function () {
    genderCheck();
    inputCheck();
    if (inputCheck() !== false && genderCheck() !== false) {
      showData();
    }
  });
}

function addCustomGenderInput() {
  genderCustom.addEventListener('click', function () {
    customInput = document.querySelector('#custom-input');
    if (customInput === null) {
      const newCustomInput = document.createElement('input');
      newCustomInput.id = 'custom-input';
      newCustomInput.name = 'gender-custom';
      newCustomInput.placeholder = 'Genero';
      newCustomInput.type = 'text'; // por default ja é text, mas eu quero especificar na msm
      genderContainer.appendChild(newCustomInput);
    }
  });
}

function removeCustomGenderInput() { // pode dar erro com o cypress!
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
