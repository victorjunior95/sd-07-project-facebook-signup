function checkForm() {
  let error = false;
  let i = 0
  document.querySelectorAll('.cadastro input').forEach((input) => {
    if ((input.type !== 'radio') && (input.className !== "personalizado")) {
      if (input.value === '') {
        error = true;
      }
    }
  });
  if (error === true) {
    document.querySelector('.error').style.display = 'block';
  }else {
    let nome = document.createTextNode(`Olá, ${document.querySelectorAll('.name')[0].value} ${document.querySelectorAll('.name')[1].value}`)
    let email = document.createTextNode(document.querySelector('.email').value);
    let genero = document.createTextNode(document.querySelector('input[name="gender"]:checked').value);
    document.querySelector('.cadastro').style.display = "none"
    document.querySelector('#um').appendChild(nome)
    document.querySelector('#dos').appendChild(email)
    document.querySelector('#tres').appendChild(genero)
  }
}

for (let i = 0; i < 3; i += 1) {
  document.getElementsByName('gender')[i].addEventListener('click', function () {
    if ((document.querySelector('input[name="gender"]:checked').value) === 'Personalizado') {
      document.querySelector('.personalizado').style.display = 'block';
    } else {
      document.querySelector('.personalizado').style.display = 'none';
    }
  });
}

document.body.onload = function () {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => e.preventDefault());
  });

  document.getElementById('button-login').addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });

  document.querySelector('#facebook-register').addEventListener('click', checkForm);
};