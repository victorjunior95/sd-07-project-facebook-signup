const buttonLogin = document.querySelector('#button-login');
const input = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', function () {
  alert(input.value);
});

//----------------------------------------------------------------

const inputs = document.querySelectorAll('.main-form input');
const rightContent = document.querySelector('.right-content');

function conteudoBoasVindas(valores) {
  if (inputs[5].checked === true) {
    valores.push(inputs[5].value);
  } else if (inputs[6].checked === true) {
    valores.push(inputs[6].value);
  } else if (inputs[7].checked === true) {
    valores.push(inputs[7].value);
  }
  for (let i = 0; i < valores.length; i += 1) {
    rightContent.innerHTML = `${rightContent.innerHTML} ${valores[i]}`;
  }
}

function mostraTudo() {
  const valores = ['Olá, '];
  for (let i = 0; i < 5; i += 1) {
    if (i !== 3) {
      valores.push(inputs[i].value);
    }
  }

  rightContent.innerHTML = '';
  conteudoBoasVindas(valores);
}

//------------------------------------------------------------------

const p = document.createElement('p');
const mainForm = document.querySelector('.main-form');
mainForm.appendChild(p);

function verificaRadio() {
  const radios = document.querySelectorAll('.radio');

  if (
    radios[0].checked === false &&
    radios[1].checked === false &&
    radios[2].checked === false
  ) {
    p.innerHTML = 'Campos inválidos';
    return 'false';
  }
  return 'true';
}

const buttonRegister = document.querySelector('#facebook-register');
buttonRegister.addEventListener('click', function (event) {
  event.preventDefault();

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      p.innerHTML = 'Campos inválidos';
      break;
    } else {
      verificaRadio();
      if (verificaRadio() === 'true') {
        mostraTudo();
      }
    }
  }
});

//----------------------------------------------------------------------

const containerRadio = document.querySelector('.div-personalizado');
const personalizado = document.querySelector('.radio-personalizado');

personalizado.addEventListener('click', function () {
  containerRadio.innerHTML = '';
  const inputPersonalizado = document.createElement('input');
  inputPersonalizado.placeholder = 'Gênero (opcional)';
  inputPersonalizado.name = 'gender-custom';
  inputPersonalizado.classList.add('inputs-normal');
  containerRadio.appendChild(inputPersonalizado);
});

//--------------------------------------------------------------------
