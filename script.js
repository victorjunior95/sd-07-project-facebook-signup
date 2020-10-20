const errorMessage = document.querySelector('span');
let isEmpty = true;

for (let i = 2; i < inputs.length - 3; i += 1) {
  if (inputs[7].checked || inputs[8].checked || inputs[9].checked) {
    isEmpty = false;
if (inputs[7].checked || inputs[8].checked || inputs[9].checked) {
  isEmpty = false;

    if (inputs[7].checked || inputs[8].checked) {
      chosenGender = inputs[i].value;
    } else {
      chosenGender = optionalGender;
    }
  if (inputs[7].checked) {
    chosenGender = 'Feminino';
  } else if (inputs[8].checked) {
    chosenGender = 'Masculino';
  } else {
    chosenGender = 'Personalizado';
  }
}

for (let i = 2; i < inputs.length - 3; i += 1) {
  if (inputs[i].value === '') {
    errorMessage.innerText = 'Campos inválidos';
    errorMessage.style.display = 'inline';