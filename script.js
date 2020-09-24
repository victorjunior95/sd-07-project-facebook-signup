document.body.onload = function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  });

  document.getElementById('button-login').addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });
};
