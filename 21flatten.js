// Recursion - flatten

// Write a function called flatten which accepts an array of arrays and retrun a new array with all values flatten.

function flatten(arr) {
    let flat = [];

    function resolve(arr) {
        if (arr.length === 1) {
            if (arr[0] instanceof Array) resolve(arr[0]);
            else flat.push(arr[0]);
        } else {
            if (arr[0] instanceof Array) resolve(arr[0]);
            else flat.push(arr[0]);
            resolve(arr.splice(1));
        }
        return flat;
    }
    return resolve(arr);
}

// Refactored

function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}

console.log(flatten([
    [
        [1, 2]
    ]
]));