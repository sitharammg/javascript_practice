function flipACoin() {
  var n = Math.floor(Math.random() * 2);
  if (n == 0) {
    console.log("It's HEAD");
    document.getElementById("result").innerHTML = "It's HEAD";
  } else {
    console.log("It's TAIL");
    document.getElementById("result").innerHTML = "It's TAIL";
  }
}