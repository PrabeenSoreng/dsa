// Recursion - power

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. The function should mimic the functionality of Math.pow() - do not worry about negative base and exponents.

function power(base, exp) {
    let val = 1;
    if (exp === 0) return 1;

    val = base * power(base, exp - 1);
    return val;
}

console.log(power(3, 3));