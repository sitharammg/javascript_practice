function sortremdup() {
  var arr = document.array.num.value.split(" ");

  document.getElementById("result").innerHTML = "The Array given with duplicates is " + arr;
  console.log("The Array given with duplicates is " + arr);

  let unique = [...new Set(arr)];

  // document.getElementById("result").innerHTML = "The Array after removing the duplicates is " + unique;
  // console.log("The Array after removing the duplicates is " + unique);
  document.getElementById("result").innerHTML = "The Array after removing the duplicates is " + unique.sort();
  console.log("The Array after removing the duplicates is " + unique.sort());
}