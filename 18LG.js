function sum() {
  var sum = 0;
  var n = document.number.num.value;
  var n = parseInt(n);

  sum = n * ((n + 1) / 2);

  document.getElementById("result").innerHTML = "Sum of the number from 1 to " + n + " is " + sum;
  console.log("Sum of the number from 1 to " + n + " is " + sum)
}