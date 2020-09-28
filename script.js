const buttonLogin = document.getElementById('button-login');
buttonLogin.addEventListener('click', function () {
  const value = document.getElementById('user-email-phone').value;
  alert(value);
});

const replaceRightContent = function replaceRightContent() {
  const register = document.getElementById('form-register');
  register.addEventListener('submit', function (event) {
    event.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const fullName = document.getElementsByClassName('fullName')[0];
    fullName.innerHTML = `Olá, ${firstname} ${lastname}`;
    document.getElementById('password').innerHTML = '';
    const birthdate = document.getElementById('birthdate').value;
    const birthdateDiv = document.getElementById('birthdateDiv');
    birthdateDiv.innerHTML = birthdate;
    const emailTelephoneDiv = document.getElementById('emailTelephoneDiv');
    const emailTelephone = document.getElementById('emailTelephone').value;
    emailTelephoneDiv.innerHTML = emailTelephone;
    const gender = document.getElementsByName('gender');
    let genderSelected;
    for (let index = 0; index < gender.length; index += 1) {
      if (gender[index].checked) {
        genderSelected = gender[index].value;
      }
    }
    document.getElementById('genderDiv').innerHTML = genderSelected;
  });
};

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
  submitHandler: replaceRightContent,
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
