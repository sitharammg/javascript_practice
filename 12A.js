function Obj() {
  var arr = document.array.text.value;
  document.getElementById("given").innerHTML = "Given Array is " + arr;
  console.log("Given Array is " + arr);

  var arr = document.array.text.value.split("");
  var len = arr.length;
  var obj = {};
  for (var i = 0; i < len; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
    else {
      obj[arr[i]] = 1;
    }
  }
  document.getElementById("result").innerHTML = "Number of Repitations are" + obj;
  console.log("Number of Repitations are")
  console.log(obj);
}