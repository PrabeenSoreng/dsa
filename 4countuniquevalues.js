// Multiple Pointer pattern.

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array , but it will always be sorted.

function countUniqueValues(arr) {
    let pointer = 0;
    let scout = 1;

    if (arr.length === 0) return 0;

    while (scout < arr.length) {
        if (arr[pointer] !== arr[scout]) {
            pointer++;
            arr[pointer] = arr[scout];
        }
        scout++;
    }
    return pointer + 1;
}

console.log(countUniqueValues([]));