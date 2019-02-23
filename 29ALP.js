function capLtrIndex() {
  var str = document.string.txt.value;
  document.getElementById("given").innerHTML = "Given String is " + str;
  console.log("Given String is " + str);
  var len = str.length;
  var indx = [];
  for (var i = 0; i < len; i++) {
    if (str[i].match(/[A-Z]/))
      indx += (i + 1) + " ";
  }
  document.getElementById("result").innerHTML = "Index of Capital Letters in Given String are " + indx.split(" ");
  console.log("Index of Capital Letters in Given String are " + indx.split(" "));
}