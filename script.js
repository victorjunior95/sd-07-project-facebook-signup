function validar() {
  // Leitura dos dados
  const userLogin = document.getElementById('user-email-phone').value;
  const userPassord = document.getElementById('user-password').value;
<<<<<<< HEAD
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

=======

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
>>>>>>> ea25b38d718e12c16e9a457b5b64bc226d845a1a
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
<<<<<<< HEAD
=======
  return listaForm;
>>>>>>> ea25b38d718e12c16e9a457b5b64bc226d845a1a
}
validarNovoUsuario();
