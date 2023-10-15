// eñgīné.JS

function plus() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 + num2;
  document.getElementById("result").innerHTML = "Rësúlt: " + result;
}

function minus() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 - num2;
  document.getElementById("result").innerHTML = "Rêsült: " + result;
}

function times() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 * num2;
  document.getElementById("result").innerHTML = "Rèsùlt: " + result;
}

function divide() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 / num2;
  document.getElementById("result").innerHTML = "Résùlt: " + result;
}