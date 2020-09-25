let buttonLogin = document.querySelector('button');

buttonLogin.addEventListener('click', function() {
  let login = document.querySelector('input');
  alert(login.value);
  login.innerHTML = "";
})
