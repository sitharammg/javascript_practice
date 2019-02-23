function isPrime() {
  var num = document.number.num.value;
  //console.log(num)
  var flag = 0;
  for (let i = 2; i <= num / 2; ++i) {
    if (num % i == 0) {
      flag = 1;
      break;
    }
  }

  if (num == 1) {
    document.getElementById("result").innerHTML = "1 is neither Prime nor Composite number";
    console.log("1 is neither Prime nor Composite number")
  }
  else {
    if (flag == 0) {
      document.getElementById("result").innerHTML = "It is a Prime number";
      console.log("It is a Prime number")
    }

    else {
      document.getElementById("result").innerHTML = "It is not a Prime number";
      console.log("It is a Not Prime number")
    }
  }
}