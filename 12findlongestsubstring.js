// Sliding Window - findLongestSubstring

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
    let start = 0;
    let longest = 0;
    let seen = {};

    if (str === '') return 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) start = Math.max(start, seen[char]);
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }
    return longest;
}

console.log(findLongestSubstring('sdfsdft'));