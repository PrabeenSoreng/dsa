// Frequency Counter / Multiple Pointer - areThereDuplicates

// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether they are duplicates amoung the arguments passed in.

// Frequency Counter
function areThereDuplicates(...args) {
    let frequency = {};

    for (let i of args) {
        frequency[i] = (frequency[i] || 0) + 1;
        if (frequency[i] > 1) return true;
    }
    return false;
}

// Multiple Pointer
function areThereDuplicates(...args) {
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;

    while (next < args.length) {
        if (args[start] === args[next]) return true;
        start++;
        next++;
    }
    return false;
}

// One Linear Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(6, 3, 5, 7));