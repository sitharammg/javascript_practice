function mergArray() {
  var str1 = document.text.str1.value.split(" ");
  var str2 = document.text.str2.value.split(" ");

  var newStr = str1.concat(str2);

  document.getElementById("result").innerHTML = " New Array after Merging the two given Arrays is " + newStr;
  console.log(" New Array after Merging the two given Arrays is " + newStr);
}
function mergObj() {
  var obj1 = {
    "Name": "AKHIL",
    "Relationship": "Dosth"
  }
  var obj2 = {
    "Location": "Hyderabad",
    "R-status": "Single"
  }
  let merged = { ...obj1, ...obj2 };
  console.log(merged);
}