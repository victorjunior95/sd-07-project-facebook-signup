const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const value = document.getElementById('user-email-phone').value;
  alert(value);
});

const justValidate = new window.JustValidate('.form-register', {
  rules: {
    firstname: {
      required: true,
    },
    lastname: {
      required: true,
    },
    phone_email: {
      required: true,
    },
    password: {
      required: true,
    },
    birthdate: {
      required: true,
    },
    gender: {
      required: true,
    },
  },
  messages: {
    firstname: {
      required: 'Campos inválidos',
    },
    lastname: {
      required: 'Campos inválidos',
    },
    phone_email: {
      required: 'Campos inválidos',
    },
    password: {
      required: 'Campos inválidos',
    },
    birthdate: {
      required: 'Campos inválidos',
    },
    gender: {
      required: 'Campos inválidos',
    },
  },
});

window.onload = function () {
  return justValidate;
};

document.querySelectorAll('.gender').forEach((item) => {
  item.addEventListener('change', (event) => {
    if (event.target === document.getElementsByClassName('gender')[2]) {
      document.getElementById('gender-personal').style.display = 'block';
    } else {
      document.getElementById('gender-personal').style.display = 'none';
    }
  });
});

const buttonRegister = document.getElementById('form-register');
buttonRegister.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('olá');
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const emailTelephone = document.getElementById("emailTelephone").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementsByName("gender");
  let genderSelected;
  for (let index = 0; index < gender.length; index += 1) {
    if (gender[index].checked) {
      genderSelected = gender[index].value;
    }
  }
  const rightContent = document.getElementById("right-content");
  rightContent.innerHTML = `Olá, ${firstname} ${lastname}
  ${emailTelephone}
  ${birthdate}
  ${genderSelected}`;
});


