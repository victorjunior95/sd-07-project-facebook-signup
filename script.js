const genderFeminine = document.getElementById('gender-feminine');
const genderMale = document.getElementById('gender-male');
const genderCustom = document.getElementById('gender-custom');

function gender() {
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
  const rightContentInputs = document.querySelector('.facebook-register-msnError');
  const emptyFieldMsg = document.createElement('h5');
  emptyFieldMsg.innerText = 'Campos inválidos';
  emptyFieldMsg.className = 'msg-campo-vazio';
  rightContentInputs.insertBefore(emptyFieldMsg, rightContentInputs.lastChild);
}

function resetMsg() {
  const rightContentInputs = document.querySelector('.facebook-register-msnError');
  if (document.querySelector('.msg-campo-vazio') != null) {
    const msgCampoVazio = document.querySelector('.msg-campo-vazio');
    rightContentInputs.removeChild(msgCampoVazio);
  }
}

function registrarUsuario() {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneEmail = document.getElementById('phone_email').value;
  const labelBirthdate = document.getElementById('input-birthdate').value;
  const sexo = gender();

  const divPai = document.querySelector('.right-content');
  const divFilho = document.getElementById('container-cadastro');

  divPai.removeChild(divFilho);
  divPai.innerText = `Olá, ${firstName} ${lastName}!
  Confira seus dados:
  E-mail/Telefone: ${phoneEmail}
  Data de Nascimento: ${labelBirthdate}
  Genero: ${sexo}`;
}

function testeCampoVazio(itemValue, itemType) {
  return itemValue === '' && itemType !== 'radio';
}

function percorreInputs() {
  const formFields = document.querySelectorAll('.right-content input');
  for (let index = 0; index < formFields.length - 1; index += 1) {
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

  if (gender() === '') {
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

const displayOtherGender = function () {
  document.getElementById('gender-custom-other').style.display = 'block';
};

window.onload = function () {
  document.getElementById('button-login').addEventListener('click', () => alert(document.getElementById('user-email-phone').value));
  document.querySelector('#facebook-register').addEventListener('click', validaCadastro);
  genderFeminine.addEventListener('click', removeTagChild);
  genderMale.addEventListener('click', removeTagChild);
  genderCustom.addEventListener('change', displayOtherGender);
};
