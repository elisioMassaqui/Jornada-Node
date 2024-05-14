num1 = 2;
num2 = 5;
num3 = 0.5;

num5 = 5 * 0.5;

function slerpOne(a, b, t) {

    return (1- t) * a + t * b;

}

function slerp(a, b, t) {
    return a + (b - a) * t;
}

slerpOne = slerpOne(num1, num2, num3);
slerp = slerp(num1, num2, num3)


console.log(slerpOne + "\n" + slerp + "\n" + num5);