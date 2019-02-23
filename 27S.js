function reverse() {
    var str = document.string.txt.value;
    console.log(str);
    var len = str.length;

    var stng = [];
    for (var i = len; i >= 0; i--)
        stng += str[i];
    console.log(stng.split("").splice(9).join(""));
}