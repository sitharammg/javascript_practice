function capLtr() {
  var str = document.array.txt.value;
  var words = str.split(" ");
  console.log("String Splited at White Space is :- " + words)
  var arr = str.split("");
  var temp = 0;
  for (var x in arr) {
    if (arr[x] != " ") {
      if (temp == 0) {
        arr[x] = arr[x].toUpperCase()
        temp = 1;
      }
      else if (temp == 1)
        temp = 0;
    }
  }
  var stg = arr.join("");
  console.log(stg);
}