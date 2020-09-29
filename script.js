document.getElementById('button-login').addEventListener('click', () => {
    const inputText = document.getElementById('user-email-phone');
    alert(inputText.value);
  });
  
  const genderRamdom = document.querySelector('.personalizado');
  function genderGeneration() {
    if (genderRamdom.checked) {
      const newElement = document.createElement('input');
      newElement.name = 'gender-custom';
      newElement.placeholder = 'Gênero (opcional)';
      document.querySelector('.input-gender').appendChild(newElement);
    }
  } // referência http://devfuria.com.br/javascript/manipulando-radios-buttons-com-javascript/
  genderRamdom.addEventListener('click', genderGeneration);
  