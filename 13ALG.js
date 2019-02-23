function arraytyp() {
  var arr = [123, "Akhil", {}, [1, 2, 3]];
  var array = new Array();
  array.push(arr);
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var txt = typeof (arr[i]);

    if (txt === "object") {
      if (Array.isArray(arr[i]))
        console.log("[" + arr[i] + "]" + " is " + "Array");
      else
        console.log(arr[i] + " is " + "Object");
    }
    else
      console.log(arr[i] + " is " + txt);
  }
}