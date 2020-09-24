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

document.body.onload = function () {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => e.preventDefault());
  });

  document.getElementById('button-login').addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });

  document.querySelector('#facebook-register').addEventListener('click', checkForm);
};
