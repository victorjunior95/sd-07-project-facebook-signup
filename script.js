// const button = document.getElementById('button-login');
const other = document.getElementById('personalizado');
const father = document.getElementById('signup-form');

other.addEventListener('change', () => {
  const customGender = document.createElement('input');
  customGender.type = 'text';
  customGender.name = 'gender-custom';
  customGender.placeholder = 'Gênero (opcional)';
  customGender.id = 'gender-custom';
  customGender.style.display = 'flex';
  customGender.style.width = '100%';
  father.appendChild(customGender);
  father.insertBefore(customGender, father.childNodes[14]);
});

document.getElementById('button-login').addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  const password = document.getElementById('user-password').value;
  alert(email + password);
});

// Botão cadastro
const cadastro = document.getElementById('facebook-register');


cadastro.addEventListener('click', (event) => {
  event.preventDefault();
  const elements = [...document.querySelectorAll('#signup-form input')];
  // console.log(elements);
  let contador = 0;
  for (let i = 0; i < 5; i += 1) {
    if (elements[i].value === '') {
      // console.log(i);
      contador += 1;
    }
  }
  if (contador > 0) {
    father.innerHTML += '<p>Campos inválidos</p>';
  }
  const inputName = elements[0].value;
  const inputLastName = elements[1].value;
  const phoneNumber = elements[2].value;
  const dateBirth = elements[4].value;
  const genderPer = document.querySelector('input[type=radio]:checked').value;
  // console.log(`${inputName} ${inputLastName} ${phoneNumber} ${dateBirth} ${genderPer}`);

  document.querySelector('.right-content').innerHTML = `Olá, ${inputName} ${inputLastName} ${phoneNumber} ${dateBirth} ${genderPer}`;
});
