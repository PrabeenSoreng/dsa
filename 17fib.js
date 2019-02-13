// Recursion - fibonacci

// Write a fibonacci function called fib which accepts a number and return the nth number of the fibonacci sequence.

function fib(num) {
    let first = 1;
    let second = 0;
    let val = 0;

    function inner(number) {
        val = first + second;
        second = first
        first = val;

        if (number > 2) inner(number - 1);
        return val;
    }
    return inner(num);
}

// Refactored code

function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(6));