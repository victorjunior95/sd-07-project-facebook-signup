// Colocar/Retirar a caixa de texto de gênero-personalizado;
const personalizado = document.getElementById('personalizado');
const select = document.getElementById('genero-personalizado');
const masculino = document.getElementById('masculino');
const feminino = document.getElementById('feminino');

personalizado.addEventListener('change', function () {
  select.style.display = 'block';
  // document.getElementById('gender-custom').innerText = '';
  // const select = document.createElement('input');
  // select.style.display = 'block';
  // select.placeholder = 'Gênero (opcional)';
  // select.name = 'gender-custom';
  // select.id = 'gender-custom';
  // select.type = 'text';
  // genero.appendChild(select);
});
masculino.addEventListener('change', function () {
  select.style.display = 'none';
});
feminino.addEventListener('change', function () {
  select.style.display = 'none';
});

// Alerta do botão login
const botaoLogin = document.getElementById('button-login');
botaoLogin.addEventListener('click', function () {
  const EmailTelefone = document.getElementById('user-email-phone').value;
  alert(EmailTelefone);
});

const registre = document.getElementById('facebook-register');

registre.addEventListener('click', function () {
  const firstname = document.getElementById('firstname');
  const lastname = document.getElementById('lastname');
  const password = document.getElementById('password');
  const birthdate = document.getElementById('birthdate');
  const form = document.querySelector('.create-account-form');
  const right = document.querySelector('.right-content');
  const email = document.getElementById('phone_email');
  const gender = document.getElementsByName('gender');
  let index = 0;
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked) {
      index = i;
    }
  }

  if (firstname.value === '' || lastname.value === '' || password.value === '' || birthdate.value === '') {
    const novo = document.createElement('h3');
    novo.innerText = 'Campos inválidos';
    form.appendChild(novo);
  } else {
    right.innerHTML = `Olá, ${firstname.value} ${lastname.value}. Email/telefone: ${email.value} DDN: ${birthdate.value}. Gênero: ${gender[index].value}.`;
  }
});
