function vowelRplc() {
  var str = document.text.txt.value.split("");
  console.log(str)
  var len = str.length;
  for (var i = 0; i < len; i++) {
    if (str[i] === "a" || str[i] === "A")
      str[i] = 1;
    else if (str[i] === "e" || str[i] === "E")
      str[i] = 2;
    else if (str[i] === "i" || str[i] === "I")
      str[i] = 3;
    else if (str[i] === "o" || str[i] === "O")
      str[i] = 4;
    else if (str[i] === "u" || str[i] === "U")
      str[i] = 5;

  }
  document.getElementById("result").innerHTML = "String after replacing the vowels with respective numbers is " + str.join("");
  console.log("String after replacing the vowels with respective numbers is " + str.join(""));
}