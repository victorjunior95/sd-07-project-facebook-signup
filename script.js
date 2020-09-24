const button = document.getElementById('button-login');
button.addEventListener('click', function(event){
    let user = document.getElementById('user-email-phone').value;
    alert(user);
});