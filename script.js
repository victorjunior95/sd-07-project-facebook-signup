const loginButton = document.querySelector("#button-login");
const loginInput = document.querySelector("#login");

loginButton.addEventListener('click', function () {
  alert(`${loginInput.value}`);
}
) 