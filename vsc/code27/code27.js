function myFunction(){
var str=document.debt.num.value;
console.log(str);
var len=str.length;
var str1= [];

for (var i = len; i >= 0; i--){
 str1 += str[i];
 
}
console.log(str1.split("").splice(9).join(""));
alert("stop");

}