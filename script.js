// const button = document.getElementById('button-login');
const other = document.getElementById('personalizado');

other.addEventListener('change', () => {
  const father = document.getElementById('signup-form');
  const customGender = document.createElement('input');
  customGender.type = 'text';
  customGender.name = 'gender-custom';
  customGender.placeholder = 'Gênero (opcional)';
  customGender.id = 'gender-custom';
  customGender.style.display = 'flex';
  customGender.style.width = '100%';
  father.appendChild(customGender);
  father.insertBefore(customGender, father.childNodes[14]);
});
