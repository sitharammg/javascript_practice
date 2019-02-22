var nums=function(){
  
  var n=document.debt.num.value;
  console.log(n);
var c=0;
  if(n==""){
    return 0;
  }
  else{
    while(n>1){
      
      n=n/10;
      c+=1;
  
    }    //return c;

    console.log(c);
  }
}