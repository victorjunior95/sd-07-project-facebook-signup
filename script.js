const buttonlogin = document.getElementById('button-login');
buttonlogin.addEventListener('click', () => {
  const emailPhone = document.forms.myForm.fnomeEmail.value;
  const passwd = document.forms.myForm.fpassword.value;
  if (emailPhone !== '' || emailPhone !== null) {
    if (passwd === '' || passwd === null) {
        return false;
    } else {
        alert(`${emailPhone}`);
    }
  }
  return emailPhone;
});

const genderP = document.querySelector('#gender-p');
genderP.addEventListener('change', () => {
  const genderOptions = document.querySelector('.gender-options');
  const inputGender = document.createElement('input');
  inputGender.name = 'gender-custom';
  inputGender.placeholder = 'Gênero (opcional)';
  inputGender.type = 'text';
  genderOptions.appendChild(inputGender);
});

let count = 0;/* referência projeto higoramorim-facebook-project*/
function addMsgError(check) {
const registrationForm = document.querySelector('.registration-form');
  if (check) {
    const p = document.createElement('p');
    count += 1;
    if (count <= 1) {
        p.innerHTML = 'Campos inválidos';
        registrationForm.appendChild(p);
    }
  }
};

const buttonFacebookRegister = document.querySelector('#facebook-register');
buttonFacebookRegister.addEventListener('click', () => {
  const input = document.querySelectorAll('input');
  let check = false;
  input.forEach((item) => {
      if (item.id !== 'user-email-phone' && item.id !== 'user-password') {
          if (item.value === '' || item.value === null) {
              check = true;
          }
      }
  });
  addMsgError(check);
});
