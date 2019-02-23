function stngarray() {
  var ar1 = document.array.txt.value.split(" ");

  var arr = document.array.txt.value.split(" ");

  var arrr = document.array.txt.value.split(" ");
  sortByLength();
  sortByVowelsLen();
  sortByAlpha();

  function sortByLength() {
    var arr1 = ar1.sort(function (a, b) { return a.length - b.length });
    // document.getElementById("result").innerHTML = arr;
    console.log("Array sorted by Length of the elements is " + arr1);
  }

  function sortByVowelsLen() {

    for (var i = 0; i < arr.length; i++) {
      let Vcount = 0;
      for (var j = 0; j < arr[i].length; j++) {
        ch = arr[i].charAt(j);
        // console.log(j)
        console.log(arr[i]);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
          Vcount++;
        }
      }
      console.log("Length of the Vowels in " + (i + 1) + "th string is " + Vcount);
    }
    // console.log("Array sorted by Length of the Vowels in the string is " + arr2);
  }

  function sortByAlpha() {
    var arr2 = arrr.sort();
    console.log("Array sorted by Alphabetical order of the elements is " + arr2);
  }

}