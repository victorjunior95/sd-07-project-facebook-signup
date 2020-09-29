const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function () {
  const emailInput = document.getElementById('email-input').value;
  alert(emailInput);
});

const enrrolmentButton = document.getElementById('facebook-register');

enrrolmentButton.addEventListener('click', function (event) {
  event.preventDefault();
  const inputList = document.querySelectorAll('.signup-form input');
  // for (let index = 0; index < inputList.length; index += 1) {
  //   if (inputList[index].value === '') {
  //     document.getElementById('hidden-input').classList.remove('hidden-input');
  //     return;
  //   }
  // }
  const data = document.getElementById('signup-form');
  console.log(data.gender);
  const outputList = document.getElementsByClassName('output-form');
  const outputDiv = document.getElementById('sign-up-completed');
  // outputDiv.innerHTML = `Olá, ${outputList[0].value} ${outputList[1].value}<br>
  // Email: ${outputList[2].value}<br>
  // Data de nascimento: ${outputList[4].value}<br>
  // Gênero: ${data.gender.value}`;
});

document.getElementById('custom-radio').addEventListener('click', () => {
  document.getElementById('custom-options').classList.remove('hidden-input');
})

document.getElementById('male-radio').addEventListener('click', () => {
  document.getElementById('custom-options').classList.add('hidden-input')
})

document.getElementById('female-radio').addEventListener('click', () => {
  document.getElementById('custom-options').classList.add('hidden-input')
})
