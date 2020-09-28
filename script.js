const signIn = document.getElementById('button-login');
const emailPhoneInput = document.getElementById('user-email-phone');
const rightContent = document.querySelector('.right-content');
const register = document.getElementById('facebook-register');

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

function changeRightContent () {
  const name = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const emailOrPhone = document.getElementById('phone-email').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[type="radio"]:checked').value;
  rightContent.innerHTML = ''; // Apagar conteúdo do lado direito
  console.log(`nome ${name}, sobrenome ${lastName}, email ${emailOrPhone}, data ${birthdate}, genero ${gender}`);
}

register.addEventListener('click', changeRightContent);