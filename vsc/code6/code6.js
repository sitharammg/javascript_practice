function myFunction(){
  
  var arr = document.debt.num.value.split(",");
  console.log(arr);
  
for (var i = 0; i < arr.length; i++) {
  
    if ((arr[i] % 2) == 1) {
      arr.splice(i, 1);
        i = i-1;
    }
}
console.log(arr);

arr.sort();
console.log(arr);
alert("stop");
}
