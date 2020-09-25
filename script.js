const submitBt = document.querySelector('#button-login');

submitBt.addEventListener('click', function () {
  const getUser = document.querySelector('#user-email-phone').value;
  alert(getUser);
});

const personalGenre = document.querySelector('#personalized');
/* Podemos adicionar outros elementos na hora do layout */
personalGenre.addEventListener('change', () => {
  const perGen = document.createElement('input');
  const container = document.querySelector('#personalize-container');
  perGen.name = 'gender-custom';
  perGen.placeholder = 'Gênero (opcional)';
  perGen.type = 'text';
  container.appendChild(perGen);
});
