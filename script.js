function validar() {
  // Leitura dos dados
  const userLogin = document.getElementById("user-email-phone").value;
  const userPassord = document.getElementById("user-password").value;

  let mensagem = "";
  // Comparações
  if (userLogin == "") {
    mensagem += "Campo nome é obrigatório!!!\n";
  }
  if (userPassord == "") {
    mensagem += "Campo e-mail é obrigatório!!!\n";
  }

  if (mensagem != "") {
    alert("Email ou telefone");
  }

  if (mensagem == "") {
    alert("login efetuado com sucesso ");
  }
}
function validarNovoUsuario() {
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let email = document.getElementById("phone_email").value;
  let password = document.getElementById("password").value;
  let genero = document.querySelector("[type=radio]:checked");
  let dataNasc = document.getElementById("birthdate").value;

  let mensagem = "";

  // Comparações
  if (firstName == "") {
    mensagem += "Campo nome é obrigatório!!!\n";
  }

  if (lastName == "") {
    mensagem += "Campo sobrenome é obrigatório!!!\n";
  }

  if (email == null) {
    mensagem += "Selecione pelo menos um curso!!!\n";
  }

  if (password == "") {
    mensagem += "Selecione o Password!!!\n";
  }

  if (genero == null) {
    mensagem += "Selecione o genero!!!\n";
  }

  if (dataNasc == "") {
    mensagem += "Selecione a data de nascimento!!!\n";
  }

  if (mensagem != "") {
    alert(mensagem);
  }

  if (mensagem == "") {
    alert("cadastro efetuado com sucesso ");
  }
}
