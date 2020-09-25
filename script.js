const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

buttonLogin.addEventListener('click', function (event) {
  if (userEmailPhone.value === '') {
    event.preventDefault();
  } else {
    alert(userEmailPhone.value);
  }
});

const buttonRegister = document.getElementById('facebook-register');
let gender = '';
const classesRadioButtons = document.querySelectorAll('.radio');
const rightContent = document.querySelector('.right-content');
const genderCustom = document.querySelector('.gender-custom');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phoneEmail = document.getElementById('phone-email');
const password = document.getElementById('password');
const birthdate = document.getElementById('birthdate');

buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();
  const firstnameV = firstname.value;
  const lastnameV = lastname.value;
  const phoneEmailV = phoneEmail.value;
  const passwordV = password.value;
  const birthdateV = birthdate.value;
  const error = document.querySelector('.error-form');
  const values = [firstnameV, lastnameV, phoneEmailV, passwordV, birthdateV];
  let check = 0;
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') {
      check += 1;
    }
  }

  if (validationRadioButton() && check === 0) {
    newUserData();
  } else {
    error.style.display = 'initial';
  }
});

for (let index = 0; index < classesRadioButtons.length; index += 1) {
  classesRadioButtons[index].addEventListener('click', function (event) {
    if (event.target.id === 'Personalizado') {
      genderCustom.style.display = 'initial';
      gender = 'Personalizado';
    } else {
      genderCustom.style.display = 'none';
      switch (event.target.id) {
        case 'Feminino':
          gender = 'Feminino';
          break;
        default:
          gender = 'Masculino';
          break;
      }
    }
  });
}

function validationRadioButton() {
  let check = 0;
  for (let index = 0; index < classesRadioButtons.length; index += 1) {
    if (classesRadioButtons[index].checked) {
      check += 1;
    }
  }

  if (check > 0) {
    if (classesRadioButtons[2].checked) {
      if (genderCustom.value === '') {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function newUserData() {
  rightContent.innerHTML = '';
  const p = document.createElement('p');
  p.className = 'register';
  p.innerHTML = `Olá, ${firstname.value} ${lastname.value}
${phoneEmail.value}
${birthdate.value}
${gender}`;
  rightContent.appendChild(p);
}
