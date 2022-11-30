function loveCalculator() {
  var firstname = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var fname = document.getElementById("fname");
  var n = Math.random();
  n = n * 100;
  n = Math.floor(n) + 1;
  fname.textContent = firstname + " " + lastname + n;

  return firstname;
}

loveCalculator();
