const mensagem='';
const listaForm = {};
function validar(mensagem) {
  // Leitura dos dados
  const userLogin = document.getElementById('user-email-phone').value;
  const userPassord = document.getElementById('user-password').value;

   this.mensagem = '';
  // Comparações
  if (userLogin === '') {
    this.mensagem += 'Campo nome é obrigatório!!!\n';
  }
  if (userPassord === '') {
    this.mensagem += 'Campo e-mail é obrigatório!!!\n';
  }

  if (mensagem !== '') {
    alert('Email ou telefone');
  }

  if (mensagem === '') {
    alert('login efetuado com sucesso');
  }
  
}
function validarNovoUsuario() {
  this.listaForm='';
  listaForm.firstName = document.getElementById('firstname').value;
  listaForm.lastName = document.getElementById('lastname').value;
  listaForm.email = document.getElementById('phone_email').value;
  listaForm.password = document.getElementById('password').value;
  listaForm.genero = document.querySelector('[type=radio]:checked');
  listaForm.dataNasc = document.getElementById('birthdate').value;
  if (listaForm !== '') {
    alert('nao tem nada aqui');
  }
  return listaForm;
}
