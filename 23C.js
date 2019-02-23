function calculate_tax() {
  var total;
  var income = parseFloat(document.number.num.value);
  var tax = calcTaxes(income);
  var rate = (tax / income) * 100;
  document.getElementById("tax").innerHTML = "The Income Tax amount for Given Income " + income + " is " + tax;
  console.log("The Income Tax amount for Given Income " + income + " is " + tax);
  document.getElementById("rate").innerHTML = "The Income Tax rate for Given Income " + income + " is " + rate;
  console.log(" Income Tax Rate is " + rate + "%")

  function calcTaxes(amount) {
    var calculate = 0;
    if (amount > 85650) {
      tax = (amount - 85650) * .28 + 870.0 + (35350 - 8700) * .15 + (89350 - 36900) * .25;
    }
    else if (amount > 35350) {
      tax = (amount - 35350) * .25 + 870.0 + (35350 - 8700) * .15;
    }
    else if (amount > 8700) {
      tax = (amount - 8700) * .15 + 870.0;
    }
    else {
      tax = amount * .10;
    }
    tax += amount * .153;
    return tax;
    /*
  10% on taxable income from $0 to $8,700, plus
  15% on taxable income over $8,700 to $35,350, plus
  25% on taxable income over $35,350 to $85,650, plus
  */
  }
}