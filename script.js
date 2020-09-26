const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function () {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
});

const buttonSignUp = document.querySelector('#facebook-register');
buttonSignUp.addEventListener('click', (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll('.subscription-form input');
  inputs.forEach((element) => {
    if (element.value === '') {
      const p = document.querySelector('#invalid-camp');
      p.textContent = 'Campos inválidos';
    }
  });
  if (document.querySelector('#invalid-camp').textContent === '') {
    const firstname = document.getElementsByName('firstname')[0].value;
    const lastname = document.getElementsByName('lastname')[0].value;
    const phoneEmail = document.getElementsByName('phone_email')[0].value;
    const birthdate = document.getElementsByName('birthdate')[0].value;
    let gender = '';
    const genderList = document.getElementsByName('gender');
    genderList.forEach((element) => {
      if (element.checked) {
        gender = element.value;
      }
    });
    const validContent = document.querySelector('.right-content');
    validContent.innerHTML = `
          Olá, ${firstname} ${lastname}
          ${phoneEmail}
          ${birthdate}
          ${gender}
        `;
  }
});

const inputCustom = document.querySelector('#Personalizado');
inputCustom.addEventListener('click', () => {
  const genderCustom = document.createElement('input');
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';
  genderCustom.type = 'text';
  document.getElementById('custom-gender').appendChild(genderCustom);
});
