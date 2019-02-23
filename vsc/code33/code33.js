function myFunction(){
  var arr1=document.debt.num.value.split(",");
  console.log(arr1);
  var arr2=document.debt.num1.value.split(",");
  console.log(arr2);
  var arr3;
  arr3=arr1.concat(arr2);
  console.log("merged array is");
  console.log(arr3);
  alert("stop");
}