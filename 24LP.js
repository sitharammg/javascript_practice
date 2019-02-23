function symetric() {
  var num = document.number.num.value;
  var temp = num;
  var rem = 0;
  var sum = 0;
  while (num > 1) {
    rem = Math.floor(num % 10);
    sum = Math.floor((sum * 10) + rem);
    num = Math.floor(num / 10);
  }
  console.log(sum)
  if (sum == temp) {
    document.getElementById("result").innerHTML = "Given Number is Symmetrical Number";
    console.log("Given Number is Symmetrical Number");
  }
  else {
    document.getElementById("result").innerHTML = "Given Number is Not a Symmetrical Number";
    console.log("Given Number is Not a Symmetrical Number");
  }
}