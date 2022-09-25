"use strict";
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3));
console.log(add(2, 3, 1));
const sub = (a, b, c = 10) => a - b - c;
console.log(sub(2, 3));
console.log(sub(2, 3, 1));
const mult = function (a, b) {
    return a * b;
};
console.log(mult(2, 3));
function add2(a, b, ...c) {
    return a + b + c.reduce((a, b) => a + b, 0);
}
console.log(add2(2, 3, ...[5, 6, 7]));
console.log(add2(2, 3, 5, 6, 7));
function getItems(items) {
    return new Array().concat(items);
}
let concatNums = getItems([1, 2, 3, 4, 5]);
let concatStrings = getItems(["a", "b", "c", "d", "e"]);
console.log(concatNums);
console.log(concatStrings);
//# sourceMappingURL=functions.js.map