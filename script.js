const signIn = document.getElementById('button-login');
const emailPhoneInput = document.getElementById('user-email-phone');

signIn.addEventListener('click', () => {
  alert(emailPhoneInput.value);
});


document.querySelector('#custom-gender').addEventListener('click', () => {
  const customGender = document.createElement('input');
  customGender.type = 'text';
  customGender.name = 'gender-custom';
  customGender.placeholder = 'Gênero (opcional)';
  document.querySelector('.all-genders').appendChild(customGender);
});

function checkUserInputs() {
  const inputs = document.querySelectorAll('.register-input');
  // const radioButtons = document.querySelectorAll('input[type="radio"]');

  inputs.forEach((item) => {
    if (item.length === 0) {
      document.querySelector('p').style.display = 'block';
    }
  });
}

document.querySelector('#facebook-register').addEventListener('click', checkUserInputs);
