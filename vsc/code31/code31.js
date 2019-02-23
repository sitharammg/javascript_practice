function myFunction(){
  
  var str = document.debt.num.value.split(" ");
  
  console.log(str);
var n = 4;
var replace="4"; 
len=str.length;
for(var i=n-1; i<len-1; i+=n){
  console.log(typeof n);
    str[i] = replace ;
    
}
console.log( str.join(" "));
alert("stop");
}