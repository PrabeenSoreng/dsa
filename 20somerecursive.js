// Recursion - someRecursive

// Write a function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array return true when passed to the callback. Otherwise it returns false.
const isOdd = val => val % 2 !== 0;

function someRecursion(arr, cb) {
    if (arr.length === 0) return true;
    if (!cb(arr[0])) return false;
    return someRecursion(arr.splice(1), cb);
}

console.log(someRecursion([1, 3, 5, 7], isOdd));