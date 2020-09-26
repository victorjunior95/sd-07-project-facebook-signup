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
    if (element.value === '' ) {
      const p = document.querySelector('#invalid-camp');
      p.textContent = 'Campos inválidos';

    }
  });
     if (document.querySelector('#invalid-camp').textContent === ''){
       const name = document.ga

     }



  //   const validContent = document.querySelector('.right-content');
  //   validContent.remove();
  // }
})

const inputCustom = document.querySelector('#Personalizado');
inputCustom.addEventListener('click', () => {
  const genderCustom = document.createElement('input');
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';
  genderCustom.type = 'text';
  document.getElementById('custom-gender').appendChild(genderCustom);

})

