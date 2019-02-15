// Recursion - capitalizeWords

// Write a function called capitalizeWords. Given an array of words, return a new array containing each word capitalize.

function capitalizeWords(arr) {
    let result = [];
    if (arr.length === 0) return [];
    result.push(arr[0].toUpperCase());
    result = result.concat(capitalizeWords(arr.splice(1)));
    return result;
}

console.log(capitalizeWords(['car', 'book', 'television']));