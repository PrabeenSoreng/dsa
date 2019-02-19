// Search a substring inside of a longer string and return the number of occurrence.

function stringSearch(longstr, substr) {
    let count = 0;

    for (let i = 0; i < longstr.length; i++) {
        for (let j = 0; j < substr.length; j++) {
            if (substr[j] !== longstr[j + i]) break;
            if (j === substr.length - 1) count++;
        }
    }
    return count;
}

console.log(stringSearch("wowomgzomgdfgomg", "omg"));