// Multiple pointer - averagePair

// Write a function called averagePair. Given a sorted array of integers and a target average, detarmine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr, target) {
    let start = 0;
    let next = 1;
    let avg = 0;
    if (arr.length === 0) return false;

    while (next < arr.length) {
        avg = (arr[start] + arr[next]) / 2;
        if (avg === target) return true;
        else if (next === (arr.length - 1)) {
            start++;
            next = start + 1;
        } else next++;
    }
    return false;
}

console.log(averagePair([1, 2, 3, 4], 3));