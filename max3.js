const num1 = process.argv[2];
const num2 = process.argv[3];
const num3 = process.argv[4];
console.log(num1, num2, num3);
const max = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
const maxNum = max(num1, num2, num3);
console.log(`The maximum number is ${maxNum}`);
