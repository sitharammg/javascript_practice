function isArr(y) {
  return Array.isArray(y);
}
// var arr = document.array.text.value;
// console.log("Given Input is " + arr);
// console.log(Array.isArray([1, 2, 3]));
function Arr() {

  var x = [1, 2, 3];
  if (isArr(x)) {
    document.getElementById("result").innerHTML = "It is an Array [1,2,3]";
    console.log("It is an Array [1,2,3]");
  } else {
    document.getElementById("result").innerHTML = "It is Not an Array";
    console.log("It is Not an Array");
  }
}

function notArr() {

  var x = ({ abc: 123 });
  if (isArr(x)) {
    document.getElementById("result").innerHTML = "It is an Array";
    console.log("It is an Array");
  } else {
    document.getElementById("result").innerHTML = "It is Not an Array {abc : 123}";
    console.log("It is Not an Array {abc : 123}");
  }
}