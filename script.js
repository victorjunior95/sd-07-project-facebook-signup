const buttonForm = document.querySelector("#button-login");
const loginInput = document.querySelector("#user-email-phone");

buttonForm.addEventListener("click", function () {
  alert(loginInput.value);
})

const rightContentInputs = document.querySelector("#sign-up-container").querySelectorAll("input");

document.querySelector("#facebook-register").addEventListener("click", function () {
  rightContentInputs.forEach(item => {
    item.required = "required";

    if(item.value == "") {
      item.value = "Campos inválidos";
    }
  }) 
})