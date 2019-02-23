function rearng(str, arr) {
  var sng = [];
  for (var x in arr) {
    var n = parseInt(arr[x]);
    sng[n] = str[x];
  }
  document.getElementById("result").innerHTML = "Rearranged String with corresponding Indexes is " + sng.join("");
  console.log("Rearranged String with corresponding Indexes is " + sng.join(""));
}
function strng() {
  var str = document.text.str.value;
  var arr = document.text.num.value;

  document.getElementById("result").innerHTML = "Entered String is " + str;
  console.log("Entered String is " + str);

  document.getElementById("result").innerHTML = "Entered Array is " + arr;
  console.log("Entered Array is " + arr);

  var str = document.text.str.value.split("");
  var arr = document.text.num.value.split("");

  rearng(str, arr);
}
