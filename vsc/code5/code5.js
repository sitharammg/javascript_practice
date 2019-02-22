function myFunction(){
var arr = document.debt.num.value.split(",").map(Number);

console.log(arr);
var mis= [];

    for(var i = 1; i < arr.length; i++) 
    {    
       
        if(arr[i] - arr[i-1] != 1) 
        {         
            var x = arr[i] - arr[i-1];
            var j = 1;
            while (j<x)
            {
                mis.push(arr[i-1]+j);
                j++;
            }
        }
    }
    // missing numbers
console.log(mis);
alert("stop");
  }