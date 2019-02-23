function celsius() {
  var cel = document.number.num.value;
  var fahr = 0;
  fahr = (cel * (9 / 5)) + 32;
  console.log(fahr);
  document.getElementById("result").innerHTML = "Temperature in Fahrenheit is " + fahr;
}