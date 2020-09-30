const buttonlogin = document.getElementById('button-login');
buttonlogin.addEventListener('click', () => {
  const emailPhone = document.forms.myForm.fnomeEmail.value;
  alert(`${emailPhone}`);
});

const genderP = document.querySelector('#gender-p');
genderP.addEventListener('change', () => {
  const formGenero = document.querySelector('.form-genero');
  const inputGender = document.createElement('input');
  inputGender.name = 'gender-custom';
  inputGender.placeholder = 'Gênero (opcional)';
  inputGender.id = 'label-gender';
  inputGender.type = 'text';
  formGenero.appendChild(inputGender);
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
}

function cleanRightContentDiv() {
  const rightContentDiv = document.querySelector('.right-content');
  rightContentDiv.innerHTML = '';
}

function returnMsg(nome, email, dataNascimento, gender) {
  const rightContent = document.querySelector('.right-content');
  const p = document.createElement('p');
  p.innerHTML = `Olá ${nome} ${email} ${dataNascimento} ${gender}`;
  rightContent.appendChild(p);
}

function preventDefault() {

}

let nome;
let email;
let dataNascimento;
let gender;

const buttonFacebookRegister = document.querySelector('#facebook-register');
buttonFacebookRegister.addEventListener('click', () => {
  const form = document.forms.myForm1;
  const input = document.querySelectorAll('input');
  let check = false;
  input.forEach((item) => {
    if (item.id !== 'user-email-phone' && item.id !== 'user-password') {
      if (item.value === '' || item.value === null) {
        check = true;
      }
    }
  });
  if (check === false) {
    preventDefault();
    nome = `${form[0].value} ${form[1].value}`;
    email = `${form[2].value}`;
    gender = document.querySelector('input[name="gender"]:checked').value;
    if (gender === 'Personalizado') {
      dataNascimento = `${form[5].value}`;
    } else {
      dataNascimento = `${form[4].value}`;
    }
    cleanRightContentDiv();
    returnMsg(nome, email, dataNascimento, gender);
  }
  addMsgError(check);
});
