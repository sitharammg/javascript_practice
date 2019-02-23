function Prime() {

    var left = 0;
    var right = 0;
    var i;
    var j;
    var num = parseInt(document.prime.num.value);
    console.log(num)
    for (i = num - 1; i > 0; i--) {
        left++;
        if (isPrime(i)) {
            console.log(left)
            break;
        }


    }
    for (j = num + 1; j < (2 * num); j++) {
        right++;
        if (isPrime(j)) {
            console.log(right)
            break;
        }
    }

    if (left == right) {
        document.getElementById("result").innerHTML = "nearest Prime Number of " + num + " is " + i;
        console.log("nearest Prime Number of " + num + " is " + i)
    }
    else if (left < right) {
        document.getElementById("result").innerHTML = "Nnearest Prime Number of " + num + " is " + i;
        console.log("Nnearest Prime Number of " + num + " is " + i)
    }
    else {
        document.getElementById("result").innerHTML = "Nnnearest Prime Number of " + num + " is " + j;
        console.log("Nnnearest Prime Number of " + num + " is " + j)
    }

}
function isPrime(n) {
    var flag = 0;
    for (let i = 2; i <= n / 2; ++i) {
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }

    if (n > 1) {
        if (flag == 0) {
            console.log("Prime")
            return true;
        }
        else {
            console.log("Not Prime")
            return false;
        }
    } else {
        console.log("Not Prime")
        return false;
    }
}