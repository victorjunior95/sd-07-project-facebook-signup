const submitBt = document.querySelector("#button-login");

submitBt.addEventListener('click', function() {
  const getUser = document.querySelector("#user-email-phone").value;
  alert(getUser);
});