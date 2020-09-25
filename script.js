const email = document.getElementById('user-email-phone');
const button = document.getElementById('button-login');

button.addEventListener('click', function () {
  alert(email.value);
});

function AddInput() {
  h = CountProds;
  var form = document.getElementById("divForm");
  var input = document.createElement("INPUT");
  var div = document.createElement("div");
  input.setAttribute("type", "text");
  input.setAttribute("id", "ref" + h);
  input.setAttribute("onkeyup", "lsRef()");
  input.setAttribute("name", "ref" + h);
  div.setAttribute("id", "lsRef" + h);
  div.setAttribute("name", "lsRef" + h);
  form.appendChild(input);
  CountProds++;
}