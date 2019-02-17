// Linear Search

function linearSearch(arr, val) {

    for (let i in arr) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([2, 15, 67, 89, 4, 0, 1], 0));