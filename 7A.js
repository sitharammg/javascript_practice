function Oddnum() {
   var arr = document.array.nmbr.value.split(" ");
   console.log(arr);
   noOdds();
   function noOdds() {
      var filtered = arr.filter(isEven);

      function isEven(value) {
         return (value % 2 == 0);
      }
      document.getElementById("result").innerHTML = "Array after Eleminating the Odd Numbers is " + filtered;
      console.log("Array after Eleminating the Odd Numbers is " + filtered);
      //return filtered;
   }
}