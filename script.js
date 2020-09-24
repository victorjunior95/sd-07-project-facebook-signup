function checkForm() {
  let error = false;
  document.querySelectorAll('.cadastro input').forEach((input) => {
    if (input.type !== 'radio') {
      if (input.value === '') {
        error = true;
      }
    }
  });

  if (error) {
    document.querySelector('.error').style.display = 'block';
  }
}

for (let i = 0; i < 3; i += 1) {
  document.getElementsByName('genero')[i].addEventListener('click', function () {
    if ((document.querySelector('input[name="genero"]:checked').value) === 'Personalizado') {
      document.querySelector('.personalizado').style.display = 'block';
    } else {
      document.querySelector('.personalizado').style.display = 'none';
    }
  });
}

document.body.onload = function () {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => e.preventDefault());
  });

  document.getElementById('button-login').addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });

  document.querySelector('#facebook-register').addEventListener('click', checkForm);
};
