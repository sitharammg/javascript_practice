function newDate() {

  var date = new Date();
  var res = date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

  document.getElementById("old").innerHTML = "Today date is " + Date();
  console.log("Today date is " + Date());
  date = new Date(res);
  document.getElementById("new").innerHTML = "The date after 7 Days From now is " + date;
  console.log("Date after 7 Days is " + date);
}

function agoDate() {

  var date = new Date();
  var res = date - 1000 * 60 * 60 * 24 * 2;
  // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)

  document.getElementById("old").innerHTML = "Today date is " + Date();
  console.log("Today date is " + Date());
  date = new Date(res);
  document.getElementById("new").innerHTML = "Date 2 Days ago from now is " + date;
  console.log("Date 2 Days ago from now is " + date);
}
