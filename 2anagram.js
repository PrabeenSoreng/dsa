// Frequency Counter pattern.

// A function which takes 2 string and checks if its an anagram or not.

function anagram(str1, str2) {
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    if (str1.length !== str2.length) return false;

    for (let s in str1) {
        let key = str1.charAt(s);
        frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
    }
    for (let s in str2) {
        let key = str2.charAt(s);
        frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) return false;
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    console.log('hello');
    return true;
}

// Refactored

function anagram(str1, str2) {
    console.log('refactored');
    if (str1.length !== str2.length) return false;

    let lookup = {}
    for (let i in str1) {
        let s = str1[i];
        lookup[s] ? lookup[s] += 1 : lookup[s] = 1;
    }

    for (let i in str2) {
        let s = str2[i];
        if (!lookup[s]) return false;
        else lookup[s] -= 1;
        console.log(lookup);
    }

    return true;
}


console.log(anagram('asdfdfsa', 'aasfdsdf'));