const buttonlogin = document.getElementById('button-login');
buttonlogin.addEventListener('click', () => {
    const emailPhone = document.forms['myForm']['fnomeEmail'].value;
    const passwd = document.forms['myForm']['fpassword'].value;
    if (emailPhone != '' || emailPhone != null) {
       if (passwd == '' || passwd == null) {
        return false;
       } else {
        alert(`${emailPhone}`);
       }
    }
    return emailPhone; 
});

const genderP = document.querySelector("#gender-p");
genderP.addEventListener("change", () => {
    const genderOptions = document.querySelector('.gender-options');
    const inputGender = document.createElement('input');
    inputGender.name = 'gender-custom';
    inputGender.placeholder = 'Gênero (opcional)';
    inputGender.type = 'text';
    genderOptions.appendChild(inputGender);
})

function addMsgError (check) {
    const registrationForm = document.querySelector(".registration-form");
    if (check) {
        let p = document.createElement("p");
        count += 1;
        if (count <= 1) {
            p.innerHTML = "Campos inválidos";
            registrationForm.appendChild(p); 
        }
    }
}

function cleanRightContentDiv() {
    const rightContentDiv = document.querySelector('.right-content');
    rightContentDiv.innerHTML = '';
}

function returnMsg (nome, email, dataNascimento, gender) {
    const rightContent = document.querySelector(".right-content");
    let p = document.createElement("p");
    p.innerHTML = `Olá ${nome} ${email} ${dataNascimento} ${gender}`
    rightContent.appendChild(p);     
}

let nome;
let email;
let dataNascimento;
let gender;
let count = 0; /*referência projeto higoramorim-facebook-project*/   
const buttonFacebookRegister = document.querySelector("#facebook-register");
buttonFacebookRegister.addEventListener("click", () => {
    let form = document.forms["myForm1"];
    const input = document.querySelectorAll('input')
    let check = false;
    input.forEach(item => {
        if (item.id !== 'user-email-phone' && item.id !== 'user-password') {
            if (item.value === '' || item.value === null) {
                check = true;
            } 
        }
    });
    if (check === false) {
        nome = `${form[0].value} ${form[1].value}`;
        email = `${form[2].value}`;
        dataNascimento = `${form[4].value}`;
        gender = document.querySelector('input[name="gender"]:checked').value;
        cleanRightContentDiv();
        returnMsg (nome, email, dataNascimento, gender);
    }
    addMsgError (check);
});
