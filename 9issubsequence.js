// Multiple Pointer - isSubsequence

// Write a function called isSubsequence which takes in two strings and check whether the characters in first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appears somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
    let firstPointer = 0;
    let secondPointer = 0;

    if (!str1) return false;

    while (secondPointer < str2.length) {
        if (str1[firstPointer] === str2[secondPointer]) firstPointer++;
        if (firstPointer === str1.length) return true;
        secondPointer++;
    }
    return false;
}

// Recursive but not O(1)

function isSubsequence(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
    return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence('abc', 'abc'));