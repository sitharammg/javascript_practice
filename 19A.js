function namesObj() {
  var arr = [
    {
      'name': 'AKHIL',
      'age': 22
    },
    {
      'name': 'RAJ',
      'age': 24
    },
    {
      'name': 'BELDARI',
      'age': 28
    }
  ];
  var names = [];
  var len = arr.length;
  console.log(len);
  for (var i = 0; i < len; i++)
    if (i < len - 1)
      names += arr[i].name + ",";
    else
      names += arr[i].name;

  var names = names.split(",").sort();
  document.getElementById("result").innerHTML = "Array of Names of the Object are " + names;
  console.log(names);

}