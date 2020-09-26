const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function(){
  const email = document.getElementById('user-email-phone').value;
  alert(email);
})

const buttonSignUp = document.querySelector('#facebook-register');
buttonSignUp.addEventListener('click', (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll('.subscription-form input');
  inputs.forEach(element => {

    console.log(element.value);
    if (element.value === '' ) {
      const p = document.querySelector('#invalid-camp');
      p.textContent = 'Campos inválidos';

    }
  });
})
