var num = document.fact.num;
var fct = 1;

function factorial() {
  if (num.value.trim() == "") {
    
    document.getElementById("result").innerHTML =  new Error("Number not Provided!");
   throw new Error("Number not Provided!");
   //document.getElementById("result").innerHTML =  "Number not Provided!";
    //console.log("Number not Provided")
  }
  else if (num.value > 0 && num.value < 100) {
    for (var i = 1; i <= num.value; ++i)
      fct = fct * i;

    document.getElementById("result").innerHTML = " Factorial of " + num.value + " is " + fct;
    console.log(" Factorial of " + num.value + " is " + fct);
  }
  else {
    document.getElementById("result").innerHTML =  new Error("Number Provided is not in range 0 - 100!");
    throw new Error("Number Provided is not in range 0 - 100!");
    // document.getElementById("result").innerHTML = "Number provided is not in range 0 - 100";
    // console.log("Number provided is not in range 0 - 100")
  }
}