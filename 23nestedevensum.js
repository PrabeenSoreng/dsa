// Recursion - nestedEvenSum

// Write a function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
    let sum = 0;

    function iterate(obj) {
        obj = Object.values(obj);

        if (obj.length === 0) return 0;
        if (obj[0] instanceof Object) iterate(obj[0]);

        if (!isNaN(parseFloat(obj[0]) && isFinite(obj[0]))) {
            if (obj[0] % 2 === 0) sum += obj[0] + iterate(obj.splice(1));
            else iterate(obj.splice(1));
        } else iterate(obj.splice(1));

        return sum;
    }
    return iterate(obj);
}

// Refactored

function nestedEvenSum(obj, sum = 0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 6 },
    d: 1,
    e: { e: { e: 3 }, ee: 'car' }
};

console.log(nestedEvenSum(obj2));