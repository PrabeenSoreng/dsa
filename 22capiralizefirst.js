// Recursion - capitalizeFirst

// Write a function called capitalizeFirst. Given an array of string, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
    let result = [];
    if (arr.length === 0) return [];
    result.push(arr[0].charAt(0).toUpperCase() + arr[0].substring(1, arr[0].length));
    result = result.concat(capitalizeFirst(arr.splice(1)));
    return result;
}

console.log(capitalizeFirst(['car', 'book', 'television']));