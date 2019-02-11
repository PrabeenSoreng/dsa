// Sliding Window - minSubArrayLen

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integer and a positive integer.

//This function should return the minimal length of a contigous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(arr, num) {
    let minLength = Infinity;
    let sum = 0;
    let start = 0;
    let end = 0;

    if (arr.length === 0) return 0;

    while (start < arr.length) {
        if (sum < num && end < arr.length) {
            sum += arr[end];
            end++;
        } else if (sum >= num) {
            minLength = Math.min(minLength, end - start);
            sum -= arr[start];
            start++;
        } else break;
    }
    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([1, 2, 3, 4, 5], 2));