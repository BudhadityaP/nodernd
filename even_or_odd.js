function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

// Example usage:
const inputNumber = parseInt(process.argv[2], 10);
if (!isNaN(inputNumber)) {
    checkEvenOrOdd(inputNumber);
} else {
    console.log("Please provide a valid number as input.");
}