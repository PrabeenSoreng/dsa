// Recursion - isPallindrome

// Write a function called isPallindrome which returns true if the string passed to is a pallindrome(reads the same forward and backword). Otherwise it return false.


function isPallindrome(str) {
    let rev = '';

    function reverse(str) {
        if (str.length <= 1) return str;
        return str.slice(-1) + reverse(str.slice(0, str.length - 1));
    }
    rev = reverse(str);
    if (str === rev) return true;
    else return false;
}

console.log(isPallindrome('liril'));