// Recursion - product of array

// Write a function called productOfArray which takes in an array of numbers and return the product of them all.

function productOfArray(arr) {
    let val = 1;
    if (arr.length === 0) return 1;

    val = arr[0] * productOfArray(arr.splice(1));
    return val;
}

console.log(productOfArray([1, 2, 3, 4, 5]));