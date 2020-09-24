const logBt = document.getElementById('button-login');

logBt.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function checkRadio () {
  let counter = 0;
  const genderList = document.getElementsByName('gender');
  for (let index = 0; index < genderList.length; index += 1) {
    if (genderList[index].checked === false) {
      counter += 1;
    }
  }
  if (counter === 3) {
    return false;
  } else {
    return true;
  }
}

function validateForm () {
  let inputArray = document.getElementsByTagName('input');
}
