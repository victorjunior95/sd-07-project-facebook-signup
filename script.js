// Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido

// Adicione um novo campo de texto no formulário se a pessoa usuária selecionar a opção "Personalizado" no campo Gênero
// O novo campo dever ser uma campo de texto com o atributo name "gender-custom" e um placeholder "Gênero (opcional)"
// O novo campo deve estar posicionado entre as opções de gênero e o botão "Cadastrar-se"

// Substituir o conteúdo do container com a classe right-content se o formulário estiver completamente preenchido e validado
// Deve haver um texto no modelo "Olá, Jonh Doe" (substitua John Doe pelo nome e sobrenome preenchido no formulário)
// Exibir o e-mail ou telefone
// Não exibir a senha
// Exibir a data de nascimento
// Caso a opção selecionada no campo Gênero seja Feminino exibir "Feminino"
// Caso a opção selecionada no campo Gênero seja Masculino exibir "Masculino"
// Caso a opção selecionada no campo Gênero seja Personalizado exibir "Personalizado":

const formulario= document.getElementById("formulario");
const firstname= document.getElementById("firstname")
const lastname= document.getElementById("lastname");
const phoneEmail= document.getElementById("phone_email");
const password= document.getElementById("password");
const birthdate= document.getElementById("birthdate");
const feminino= document.getElementById("feminino");
const masculino= document.getElementById("masculino");
const personalizado= document.getElementById("personalizado");
const facebookRegister= document.getElementById("facebook-register");

facebookRegister.addEventListener('click', function() {
    if ( .value == "" || .value == "" || .value == "" || .value == "" ||
    .value == "" || .value == "" || .value == "" || .value == "") {

        formulario.innerHTML
    } else {
        // pega as informações e gera o quadro
            // "Olá, " + firstname + " " + lastname
            // phoneEmail
            // birthdate
            // genero
    }
});

let tarefa = document.createElement('li');
        tarefa.textContent = novaTarefa.value;
        tarefa.classList.add('tarefas');
        lista.appendChild(tarefa);