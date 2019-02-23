function LenNum() {
  var num = document.Len.num.value;
  var temp = num;

  var count = 0;
  if (num.trim() == "") {
    document.getElementById("result").innerHTML = "Number not Provided";
    // console.log("Number not Provided");
  }
  else {

    while (temp > 1) {
      count++;
      temp = temp / 10;
    }
    document.getElementById("result").innerHTML = "Length of Given Number " + num + " is " + count;
    // console.log(count);
  }

}