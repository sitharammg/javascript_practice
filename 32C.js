class arithmeticTasks {

    static add(m, n) {
        var sum = m + n;
        return sum;
    }
    static mul(m, n) {
        var mul = m * n;
        return mul;
    }
    static exp(m, n) {
        var exp = Math.pow(m, n);
        return exp;
    }
}

function arithmetic() {
    var m = parseFloat(document.number.num1.value);
    var n = parseFloat(document.number.num2.value);
    var add = arithmeticTasks.add(m, n);
    var mul = arithmeticTasks.mul(m, n);
    var exp = arithmeticTasks.exp(m, n);
    document.getElementById("add").innerHTML = "Addition of given numbers " + m + "," + n + " is " + add;
    document.getElementById("mul").innerHTML = "Multiplication of given numbers " + m + "," + n + " is " + mul;
    document.getElementById("exp").innerHTML = "Exponential of given numbers " + m + "," + n + " is " + exp;

    console.log("Addition of given numbers " + m + "," + n + " is " + add);
    console.log("Multiplication of given numbers " + m + "," + n + " is " + mul);
    console.log("Exponential of given numbers " + m + "," + n + " is " + exp);

}