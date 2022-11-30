function loveCalculator() {
  var person1 = document.getElementById("name1").value;
  var person2 = document.getElementById("name2").value;
  var dis = document.getElementById("fname");
  var n = Math.random();
  n = n * 70;
  n = Math.floor(n) + 30;
  dis.textContent = person1 + " " + person2 + n + "%";

  return firstname;
}

loveCalculator();
