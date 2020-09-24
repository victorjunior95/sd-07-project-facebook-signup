const buttonForm = document.querySelector("#button-login");
const loginInput = document.querySelector("#user-email-phone");

buttonForm.addEventListener("click", function () {
  alert(loginInput.value);
})

const rightContentInputs = document.querySelector("#sign-up-container").querySelectorAll("input");



document.querySelector("#facebook-register").addEventListener("click", function () {
  rightContentInputs.forEach(item => {
    let requiredContainer = document.querySelector(".required-alert");

    item.required = "required";

    if(item.value == "") {
      requiredContainer.innerText = "Campos inválidos";
    }
  }) 
})

const genderOptions = document.querySelector("#other");
const otherContainer = document.querySelector(".gender-optional");

genderOptions.addEventListener("click", function () {
  otherContainer.style.display = "block";
})