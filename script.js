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
  submitHandler() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const birthdate = document.getElementById('birthdate').value;
    const emailTelephone = document.getElementById('emailTelephone').value;
    const gender = document.getElementsByName('gender');
    let genderSelected;
    for (let index = 0; index < gender.length; index += 1) {
      if (gender[index].checked) {
        genderSelected = gender[index].value;
      }
    }
    const result = document.createElement('div');
    result.innerHTML = `<p>Olá, ${firstname} ${lastname}</p>
    <p>E-mail e/ou telefone: ${emailTelephone}</p>
    <p>Data de Nascimento: ${birthdate}</p>
    <p>Genero: ${genderSelected}.`;
    const newRightContent = document.getElementById('right-content');
    newRightContent.innerHTML = '';
    newRightContent.appendChild(result);
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
