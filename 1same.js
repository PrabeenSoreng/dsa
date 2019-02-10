//A function which takes 2 arrays and checks an array value times 2 to its corresponding array.

// Naive approach
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i in arr1) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true;
}

// Refactored

function same(arr1, arr2) {
    console.log('refactored');
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) return false;
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }
    return true;
}


console.log(same([1, 3, 2, 3], [4, 9, 1, 9]));