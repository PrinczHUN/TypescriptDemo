function add(a: number, b: number, c?: number): number {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3));
console.log(add(2, 3, 1));

const sub = (a: number, b: number, c = 10): number => a - b - c;
console.log(sub(2, 3));
console.log(sub(2, 3, 1));

const mult = function (a: number, b: number): number {
    return a * b;
}
console.log(mult(2, 3));

function add2(a: number, b: number, ...c: number[]): number {
    return a + b + c.reduce((a, b) => a + b, 0);
}
console.log(add2(2, 3, ...[5, 6, 7]));
console.log(add2(2, 3, 5, 6, 7));

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatNums = getItems([1, 2, 3, 4, 5]);
let concatStrings = getItems(["a", "b", "c", "d", "e"]);
console.log(concatNums);
console.log(concatStrings);