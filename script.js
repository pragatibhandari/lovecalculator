var person1;
var person2;

function loveCalculator() {
  person1 = document.getElementById("name1").value;
  person1 = person1.toUpperCase();
  person2 = document.getElementById("name2").value;
  person2 = person2.toUpperCase();
  var dis = document.getElementById("fname");

  if (person1 == "" && person2 == "") {
    return (dis.textContent = "Person 1 and Person 2 missing");
  } else if (person1 == "") {
    return (dis.textContent = "Person 1 is missing");
  } else if (person2 == "") {
    return (dis.textContent = "Person 2 is missing");
  } else {
    return (dis.textContent = person1 + " and " + person2 + " You love is ");
  }
}

loveCalculator();

function calculate() {
  person1;
  person2;
  var n = Math.random();
  n = n * 40;
  n = Math.floor(n) + 60;

  var dis = document.getElementById("result");
  if (person1 != "" && person2 != "") {
    return (dis.textContent = n + " %");
  }
}
