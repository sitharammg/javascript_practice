function sum() {
  var sum = 0;
  var arr = document.number.num.value.split(" ");
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    sum += parseInt(arr[i]);
  }
  document.getElementById("result").innerHTML = "Sum of the number in array " + arr + " is " + sum;
  console.log("Sum of the number in array " + arr + " is " + sum)
}