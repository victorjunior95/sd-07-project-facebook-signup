function radioCheked() {
  const otherGender = document.getElementById('other');
  const novoInput = document.createElement('input');
  const inputsValue = document.querySelectorAll('.u-gender-option input');
  if ((otherGender.checked) && (inputsValue.length < 4)) {
    novoInput.setAttribute('type', 'text');
    novoInput.setAttribute('name', 'gender-custom');
    novoInput.setAttribute('id', 'gender-custom');
    novoInput.setAttribute('placeholder', 'Gênero (opcional)');
    document.querySelector('.u-gender-option').appendChild(novoInput);
  }
}
document.getElementById('other').addEventListener('click', radioCheked);

const pMensageInvalid = document.getElementById('mensage-invalid');
const btButtonLogin = document.getElementById('button-login');
btButtonLogin.addEventListener('click', function () {
  const inpUserEmailPhone = document.getElementById('user-email-phone');
  alert(inpUserEmailPhone.value);
});

const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  const inpFirstname = document.getElementsByName('firstname')[0];
  const inpLastname = document.getElementsByName('lastname')[0];
  const inpPhoneEmail = document.getElementsByName('phone_email')[0];
  const inpPassword = document.getElementsByName('password')[0];
  const inpBirthdate = document.getElementsByName('birthdate')[0];
  const inpGender = document.getElementsByName('gender');
  // const genderOther = document.getElementsByName('other')
  // const mensage
  let innerIf = false;

  if (inpFirstname.value.trim() === '') {
    innerIf = true;
  }
  if (inpLastname.value.trim() === '') {
    innerIf = true;
  }
  if (inpPhoneEmail.value.trim() === '') {
    innerIf = true;
  }
  if (inpPassword.value.trim() === '') {
    innerIf = true;
  }
  if (inpBirthdate.value.trim() === '') {
    innerIf = true;
  }
  if (!(inpGender[0].checked) && !(inpGender[1].checked) && !(inpGender[2].checked)) {
    innerIf = true;
  }
  if (!innerIf) {
    pMensageInvalid.innerText = 'Campos inválidos';
  }

  // mensage = document.createElement('p');
  // mensage.setAttribute('id', 'mensage-invalid');
  // mensage.innerHTML = 'inválidos'
  // document.querySelector('.u-gender-option').appendChild(mensage);
  alert('Campos inválidos');
});
