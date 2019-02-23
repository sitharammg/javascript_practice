function currentDate() {
  var dateData = new Date();
  var date = dateData.getDate();
  var month = dateData.getMonth();
  var year = dateData.getFullYear();
  var hours = dateData.getHours();
  var minutes = dateData.getMinutes();
  var seconds = dateData.getSeconds();

  switch (month) {
    case 0: month = "January";
      break;
    case 1: month = "Feburary";
      break;
    case 2: month = "March";
      break;
    case 3: month = "April";
      break;
    case 4: month = "may";
      break;
    case 5: month = "June";
      break;
    case 6: month = "July";
      break;
    case 7: month = "August";
      break;
    case 8: month = "September";
      break;
    case 9: month = "October";
      break;
    case 10: month = "November";
      break;
    case 11: month = "December";
      break;
  }
  document.getElementById("result").innerHTML = "Today is " + date + " " + month + " " + year + " " + ". Its " + hours + " hours " + minutes + " minutes and " + seconds + " seconds now";
  console.log("Today is " + date + " " + month + " " + year + " " + ". Its " + hours + " hours " + minutes + " minutes and " + seconds + " seconds now");
}