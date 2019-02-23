function myFunction() {
var number=document.debt.num.value;
console.log(number);

  var temp=number;
  var sum=0;
  var rem;
  while (number > 0) {
      rem =Math.floor(number % 10);
      number = Math.floor(number / 10);
      sum=Math.floor(sum*10+rem);
}
    console.log(sum);
      if (temp == sum) {
          console.log("num is  symmetrical");
      }
else{
  console.log("num is not  symmetrical");
}
  alert("stop");
}