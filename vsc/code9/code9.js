function myFunction(){

  var arr = document.debt.num.value.split(",");
  console.log("arr");
  
var out = Array.from(new Set(arr));

console.log(arr);
console.log(out);
alert("stop");
}