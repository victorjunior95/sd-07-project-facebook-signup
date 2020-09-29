const login = document.getElementById('button-login');
const gender = document.querySelector('#custom');

login.addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  alert(`${email}`);
});

gender.addEventListener('change', () => {
  const form = document.querySelector('.gender');
  const text = document.createElement('input');
  text.name = 'gender-custom';
  text.placeholder = 'Gênero (opcional)';
  form.appendChild(text);
});
