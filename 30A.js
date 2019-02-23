function spltArr(spltArr, num) {
  var len = spltArr.length;
  var tempArr = [];
  var spltpart;
  for (i = 0; i < len; i += num) {
    spltpart = spltArr.slice(i, i + num);
    tempArr.push(spltpart);
  }

  return tempArr;
}
// function strng(){
var stng = document.text.txt.value.split(",");
var result = spltArr([1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(result);
// }