class square {

  static sqrA(len) {

    var sarea = len * len;
    return sarea;

  }
  static sqrP(len) {

    var sperimeter = 4 * len;
    return sperimeter;

  }
}


class rectangle {

  static rectA(len, bre) {

    var Area = len * bre;
    return Area;

  }
  static rectP(len, bre) {

    var Perimeter = 2 * (len + bre);
    return Perimeter;

  }
}

function Area() {
  var len = parseFloat(document.area.len.value);
  var bre = parseFloat(document.area.bre.value);

  let rArea = rectangle.rectA(len, bre);
  let rPerimeter = rectangle.rectP(len, bre);
  document.getElementById("rarea").innerHTML = "Area of Rectangle of Length " + len + " and breadth " + bre + " is " + rArea;
  document.getElementById("rperi").innerHTML = "Perimeter of Rectangle of Length " + len + " and breadth " + bre + " is " + rPerimeter;
  console.log("Area of Rectangle of Length " + len + " and breadth " + bre + " is " + rArea);
  console.log("Perimeter of Rectangle of Length " + len + " and breadth " + bre + " is " + rPerimeter);

  let sarea = square.sqrA(len, bre);
  let sperimeter = square.sqrP(len, bre);
  document.getElementById("sarea").innerHTML = "Area of Square of Length " + len + " and breadth " + bre + " is " + sarea;
  document.getElementById("speri").innerHTML = "Perimeter of Square of Length " + len + " and breadth " + bre + " is " + sperimeter;
  console.log("Area of Square of Length " + len + " and breadth " + bre + " is " + sarea);
  console.log("Perimeter of Square of Length " + len + " and breadth " + bre + " is " + sperimeter);


}