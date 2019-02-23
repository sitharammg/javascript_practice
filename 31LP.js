function capLtrAt4() {
  var str = document.array.txt.value;
  console.log("Entered Sentence is :- " + str);
  var arr = str.split("");
  var temp = 0;
  for (var x in arr) {
    if (arr[x] != " ") {
      temp++;
      if (temp == 4) {
        arr[x] = 4;
        temp = 0;
      }
    }
  }
  var stg = arr.join("");
  console.log(stg);
}