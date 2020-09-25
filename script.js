const buttonLogin = document.querySelector('button');

buttonLogin.addEventListener('click', function () {
  const login = document.querySelector('input');
  alert(login.value);
  login.innerHTML = '';
});
