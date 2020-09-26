const button = document.querySelector('#button-login');

  let mensagem = '';
  // Comparações
  if (userLogin === '') {
    mensagem += 'Campo nome é obrigatório!!!\n';
  }
  if (userPassord === '') {
    mensagem += 'Campo e-mail é obrigatório!!!\n';
  }
  if (mensagem !== '') {
    alert('"Email ou telefone"');
  }
  if (mensagem === '') {
    alert('login efetuado com sucesso');
  }
}
validar();

  let mensagem = '';
  // Comparações
  if (userLogin === '') {
    mensagem += 'Campo nome é obrigatório!!!\n';
  }
  if (userPassord === '') {
    mensagem += 'Campo e-mail é obrigatório!!!\n';
  }

  if (mensagem !== '') {
    alert('"Email ou telefone"');
  }

  if (mensagem === '') {
    alert('login efetuado com sucesso');
  }
}
validar();
function validarNovoUsuario() {
  const listaForm = {};
  listaForm.firstName = document.getElementById('firstname').value;
  listaForm.lastName = document.getElementById('lastname').value;
  listaForm.email = document.getElementById('phone_email').value;
  listaForm.password = document.getElementById('password').value;
  listaForm.genero = document.querySelector('[type=radio]:checked');
  listaForm.dataNasc = document.getElementById('birthdate').value;
  if (listaForm !== '') {
    alert('Campos inválidos');
  }
  return listaForm;
}
validarNovoUsuario();
button.addEventListener('click', function () {
  const userLogin = document.querySelector('#user-email-phone').value;
  alert(userLogin);
});
