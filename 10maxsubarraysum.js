// Sliding Window - maxSubarraySum

// Given an array of integers and number, write a function called maxSumarraySum, which finds the maximum sum of a sub array with the length of the number passed to the function.

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (num > arr.length || arr.length === 0) return null;

    for (let i = 0; i < num; i++) maxSum += arr[i];
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5, 12, 6, 7, 8, 9], 2));