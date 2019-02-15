// Recursion - recursiveRange

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

function recursiveRange(num) {
    let val = 0;
    if (num === 0) return 0;

    val = num + recursiveRange(num - 1);
    return val;
}

console.log(recursiveRange(5));