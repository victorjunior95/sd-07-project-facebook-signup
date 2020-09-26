const btLogin = document.querySelector('#button-login');

btLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone').value;
  alert(login);
});

const radioPerso = document.querySelector('#Personalizado');
const inputPerso = document.querySelector('#inputPersonalizado');
radioPerso.addEventListener('click', () => {
  inputPerso.innerHTML = '<input type="text" name="gender-custom" placeholder="Gênero (opcional)">';
});
