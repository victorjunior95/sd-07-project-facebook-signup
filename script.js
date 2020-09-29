const login = document.getElementById('button-login');
const gender = document.querySelector('.gender');

login.addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  alert(`${email}`);
});

gender.addEventListener('click', () => {
  for (let i = 0; i < gender.children.length; i += 1) {
    if (gender.children[i].checked) {
      const selectedElement = gender.children[i];
      if (selectedElement.value === 'Personalizado' && gender.children.length <= 7) {
        const text = document.createElement('input');
        text.name = 'gender-custom';
        text.placeholder = 'Gênero (opcional)';
        gender.appendChild(text);
      } else if (selectedElement.value !== 'Personalizado' && gender.children.length > 7) {
        gender.removeChild(gender.lastElementChild);
      }
    }
  }
});
