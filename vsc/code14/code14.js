function sum()
{
  
  var arr=document.area.num.value.split(",");
  
  console.log(arr);
  
  var sum = 0;
  
  for(var i = 0; i < arr.length; i++)
    {
      sum += parseInt(arr[i]);
    }
    console.log(sum);
    alert("stop");
  }