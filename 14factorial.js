// Recursion - factorial

// Write a function factorial which accepts a number and return the factorial of that number. A factorial is the product of the integer and all the integers below it.

function factorial(num) {
    let val = 1;
    if (num === 0) return 1;

    val = num * factorial(num - 1);
    return val;
}

console.log(factorial(4));