// Recursion - collectStrings

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.

function collectString(obj) {
    let result = [];

    function iterate(obj) {
        obj = Object.values(obj);
        if (obj.length === 0) return [];
        if (typeof obj[0] === 'object') iterate(obj[0]);
        if (typeof obj[0] === 'string') result.push(obj[0]);
        iterate(obj.splice(1));
        return result;
    }
    return iterate(obj);
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectString(obj));