// Diveide and Conquor - Binary Search

// Write a function called binarySearch which accepts a sorted array and value and return  the index at which the value exists. Otherwise return -1.

function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.ceil((left + right) / 2);

    while (left <= right) {
        if (arr[mid] === num) return mid;
        else if (arr[mid] > num) right = mid - 1;
        else if (arr[mid] < num) left = mid + 1;
        mid = Math.ceil((left + right) / 2);
    }
    return -1;
}

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 7));