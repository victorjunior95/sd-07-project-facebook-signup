const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');
const rightContentInputs = document.querySelector('.right-content form');
const formFields = document.querySelectorAll('.right-content input');
const genderFeminine = document.getElementById('gender-feminine');
const genderMale = document.getElementById('gender-male');
const genderCustom = document.getElementById('gender-custom');
const buttonSignUp = document.querySelector('#facebook-register');

buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

function genero() {
  if (genderFeminine.checked) {
    return 'Feminino';
  } else if (genderMale.checked) {
    return 'Masculino';
  } else if (genderCustom.checked) {
    return 'Personalizado';
  }
  return '';
}

function msgCampoInvalido() {
  const emptyFieldMsg = document.createElement('h5');
  emptyFieldMsg.innerText = 'Campos inválidos';
  emptyFieldMsg.className = 'msg-campo-vazio';
  rightContentInputs.insertBefore(emptyFieldMsg, rightContentInputs.children[0]);
}

function resetMsg() {
  if (document.querySelector('.msg-campo-vazio') != null) {
    const msgCampoVazio = document.querySelector('.msg-campo-vazio');
    rightContentInputs.removeChild(msgCampoVazio);
  }
}

function registrarUsuario() {
  // const primeiroNome = document.querySelector('#firstname').value
  // const ultimoNome = document.querySelector('#lastname').value
  // const nomeUsuario = primeiroNome.value + ' ' + ultimoNome.value;
  // const emailOuTelefone = document.querySelector('#phone_email').value;
  // const birthDate = document.querySelector('#input-birthdate').value;
  // const generoEscolhido = genero();
  for (let index = 0; index < formFields.length; index += 1) {
    formFields[index].value = '';
    formFields[index].checked = false;
  }
}

function testeCampoVazio(itemValue, itemType) {
  return itemValue === '' && itemType !== 'radio';
}

function percorreInputs() {
  for (let index = 0; index < formFields.length; index += 1) {
    const validandoInput = formFields[index];
    const formValue = validandoInput.value;
    const formType = validandoInput.getAttribute('type');
    if (testeCampoVazio(formValue, formType) === true) {
      return true;
    }
  }
  return false;
}

function validaCadastro() {
  resetMsg();

  if (genero() === '') {
    msgCampoInvalido();
  } else if (percorreInputs() === true) {
    msgCampoInvalido();
  } else {
    registrarUsuario();
  }
}

const removeTagChild = function () {
  const tagInput = document.querySelector('.gender-custom');
  tagInput.style.display = 'none';
};

window.onload = function () {
  buttonSignUp.addEventListener('click', validaCadastro);

  genderFeminine.addEventListener('click', removeTagChild);

  genderMale.addEventListener('click', removeTagChild);

  genderCustom.addEventListener('change', function () {
    const tagInput = document.getElementById('gender-custom-other');
    if (genderCustom.checked) {
      tagInput.style.display = 'block';
    } else {
      tagInput.style.display = 'none';
    }
  });
};
