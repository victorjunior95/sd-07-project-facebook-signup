const login = document.getElementById('button-login');

login.addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  alert(`${email}`);
});
