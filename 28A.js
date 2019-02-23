function namesObj()
{
  var obj =  {
                  'Name' : 'AKHIL',
                  'Age'  : 22,
                
                  'Location' : 'Hyderabad',
                  'Hobbies'  : 'Listen Music',
               
                  'Relation' : 'Dosth',
                  'NickName'  : 'Pedhodda'
                };
  document.getElementById("keys").innerHTML = "KEYS of the Object are " + Object.keys(obj);
  document.getElementById("values").innerHTML = "VALUES of the Object are " + Object.values(obj);
    console.log("KEYS of the Object are " );
  console.log(Object.keys(obj));
    console.log("VALUES of the Object are " );
  console.log(Object.values(obj));
}