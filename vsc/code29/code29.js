function myFunction(){
var str = document.debt.num.value;
console.log(str);
var index = [];
for(var i=0; i<str.length; i++){
    if(str[i].match(/[A-Z]/) != null){
        index.push(i);
    }
}
console.log(index);
alert("stop");
}