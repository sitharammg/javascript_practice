function misVal() {
  var arr = document.array.nmbr.value.split(" ");
  var len = arr.length;
  var arr1 = new Array();
  console.log(" Given Array is " + arr);
  misval();
  function misval() {

    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len; j++) {
        if (arr[i] === arr[j])
          arr1[arr[j]] = 1;
      }
    }
    // console.log(arr1);
    var str = [];
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] == null) {
        str = str + i + " ";
      }
    }
    document.getElementById("result").innerHTML = "Missing Numbers in the array are " + str.split(" ");
    console.log("Missing Numbers in the array are " + str.split(" "));
  }
}