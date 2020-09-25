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

const rightContent = document.querySelector('.right-content');
document.getElementById('button-login').addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  const password = document.getElementById('user-password').value;
  alert(email + password);
  for (let index = 0; index < rightContent.childElementCount; index += 1) {
    rightContent.removeChild(rightContent.childNodes[0]);
  }
});
