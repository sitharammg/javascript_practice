function evensort() {
  var arr = document.array.nmbr.value.split(" ");
  document.getElementById("result").innerHTML = "Given array is " + arr;
  console.log("Given array is " + arr);
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) == 0) {
      for (var j = 0; j < arr.length; j++) {
        if ((arr[j] % 2) == 0) {
          if (arr[i] < arr[j]) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
    }
  }
  document.getElementById("result").innerHTML = "Array after Sorting the Even numbers is " + arr;
  console.log("Array after Sorting the Even numbers is " + arr);
}
