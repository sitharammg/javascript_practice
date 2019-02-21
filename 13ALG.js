function arraytyp()
{
  var arr = document.array.num.value.split(" ");
  var array = new Array();
  array.push(arr);
  console.log(arr);
  // var arr1 = new Array();
  var len = arr.length;
  for(var i = 0; i < len; i++)
    {
      for(var j = 0; j < len; j++)
      {
      console.log(array[i][j])
        console.log(typeof(array[i][j]));
       
       //  if(!isNaN(array[i][j]))
       //   console.log("number");
       // else if((array[i][j]) == "string")
       //   console.log("String");
       //  else if(array[i][j].isArray())
       //  console.log("Array");
       //  else
       //    console.log("Object");          
        // console.log(typeof(array[i][0]))
      // arr1.push(arr[i]);
      // if(arr1[i]==/[0-9]/)
      //   console.log("number");
      }
    }
  // console.log(typeof(array[0]))
  // console.log( " " + arr1);
}