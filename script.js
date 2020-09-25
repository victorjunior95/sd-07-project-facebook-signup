function validar() {
  // Leitura dos dados
  const userLogin = document.getElementById("user-email-phone").value;
  const userPassord = document.getElementById("user-password").value;

  let mensagem = "";
  // Comparações
  if (userLogin === "") {
    mensagem += "Campo nome é obrigatório!!!\n";
  }
  if (userPassord === "") {
    mensagem += "Campo e-mail é obrigatório!!!\n";
  }

  if (mensagem !== "") {
    alert("Email ou telefone");
  }

  if (mensagem === "") {
    alert("login efetuado com sucesso ");
  }
  return 
}
function validarNovoUsuario() {
  let listaForm = {};
  listaForm.firstName = document.getElementById("firstname").value;
  listaForm.lastName = document.getElementById("lastname").value;
  listaForm.email = document.getElementById("phone_email").value;
  listaForm.password = document.getElementById("password").value;
  listaForm.genero = document.querySelector("[type=radio]:checked");
  listaForm.dataNasc = document.getElementById("birthdate").value;
  if (listaForm !== "") {
    alert("nao tem nada aqui");
  }
  return listaForm;
}
