const buttonLogin = document.getElementById('button-login');
const userData = document.getElementById('user-email-phone');
const formInput = document.querySelectorAll('.right-content form input');
const registerButton = document.querySelector('#facebook-register');
const genderInputs = document.querySelectorAll('.gender input');
let sexvar = '';
function sexValidate() {
  const sex = genderInputs;
  sex[0].addEventListener('click', function () {
    sexvar = 'Feminino';
  });

  sex[1].addEventListener('click', function () {
    sexvar = 'Masculino';
  });

  sex[2].addEventListener('click', function () {
    sexvar = 'Outros';
  });
}
sexValidate();

buttonLogin.addEventListener('click', function () {
  alert(userData.value);
});

function sexValidate() {
  const sex = genderInputs;
  sex[0].addEventListener('click', function () {
    sexvar = 'Feminino';
  });

  sex[1].addEventListener('click', function () {
    sexvar = 'Masculino';
  });

  sex[2].addEventListener('click', function () {
    sexvar = 'Outros';
  });
}

registerButton.addEventListener('click', function (xis) {
  let count = 0;
  formInput.forEach((key) => {
    if (key.value === '') {
      count += 1;
    }
  });
  if (count >= 1 || sexvar === '') {
    xis.preventDefault();
    alert('Campos inválidos');
  }
});
