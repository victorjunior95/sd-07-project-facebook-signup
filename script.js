const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', () => {
  const login = document.querySelector('#user-email-phone');
  alert(`${login.value}`);
});

const inputGender = document.querySelector('#gender-custom');
const radioGender = document.querySelector ('#other');

radioGender.addEventListener('change', () => {
    console.log('chamou');
  if (inputGender.style.display === '' || inputGender.style.display === 'none') {
      inputGender.style.display = "block";
  } else {
    inputGender.style.display = "none";
  }
})


function checkRadio() {
    if (inputGender.style.display === 'block') {
        inputGender.style.display = "none";
    }
}

const male = document.querySelector('#male');
male.addEventListener('change', checkRadio) ;

const female = document.querySelector('#female');
female.addEventListener('change', checkRadio);
