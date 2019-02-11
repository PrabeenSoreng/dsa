// Frequency Counter - sameFrequency

// Write a function called sameFrequency. given two positive integers, find out if the two numbers have the same frequnecy fo digits.

function sameFrequency(num1, num2) {
    let frequencyCounter = {};

    if (num1 === null || num1 === undefined || num2 === null || num2 === undefined) return false;

    let n1 = num1.toString();
    let n2 = num2.toString();
    if (n1.length !== n2.length) return false;

    for (let c in n1) {
        frequencyCounter[n1[c]] ? frequencyCounter[n1[c]] += 1 : frequencyCounter[n1[c]] = 1;
    }

    for (let c in n2) {
        if (!frequencyCounter[n2[c]]) return false;
        else frequencyCounter[n2[c]] -= 1;
    }
    return true;
}

console.log(sameFrequency(111, 123));