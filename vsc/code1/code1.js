function myFunction(){

var n = document.debt.num.value;
if(n==""){
  console.log("enter input");
  return false;
}
else if( n<0 || n>100){
  console.log("please enter number between 0 to 100");
  return false;
}
else{
var i, fact;
fact=1;

for(i=1; i<=n; i++)  
{
fact= fact*i;
}  
console.log (fact);

}
return false; 
}