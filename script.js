
function validar() {
  // Leitura dos dados
  const userLogin = document.getElementById('user-email-phone').value;
  const userPassord = document.getElementById('user-password').value;

  let mensagem = '';
  // Comparações
  if (userLogin == '') {
    mensagem += 'Campo nome é obrigatório!!!\n';
  }
  if (userPassord == '') {
    mensagem += 'Campo e-mail é obrigatório!!!\n';
  }

  if (mensagem != '') {
    alert('Email ou telefone');
  }

  if (mensagem == '') {
    alert('login efetuado com sucesso ');
  }
}
function validarNovoUsuario () {
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const email = document.getElementById('phone_email').value;
  const password = document.getElementById('password').value;
  const genero = document.querySelector('[type=radio]:checked');
  const dataNasc = document.getElementById('birthdate').value;
  let mensagem = '';
  // Comparações
  if (firstName == '') {
    mensagem += 'Campo nome é obrigatório!!!\n';
  }
  
  if (lastName == '') {
    mensagem += 'Campo sobrenome é obrigatório!!!\n';
  }
  
  if (email == '') {
    mensagem += 'Selecione pelo menos um curso!!!\n';
  }
  
  if (password == '') {
    mensagem += 'Selecione o Password!!!\n';
  }
  
  if (genero == '') {
    mensagem += 'Selecione o genero!!!\n';
  }
  
  if (dataNasc == '') {
    mensagem += 'Selecione a data de nascimento!!!\n';
  }
  
  if (mensagem != '') {
    alert(mensagem);
  }
 
}
