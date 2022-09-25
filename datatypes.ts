let lname: string;
lname = "Santosh";

let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);

let isValid: boolean = false;
console.log(isValid);

let empList: string[];
let depList: Array<string>;
empList = ["Santosh", "Santosh1", "Santosh2"];

let numList: Array<number>;
numList = [1, 2, 3, 4, 5, 6];

let results = numList.filter((num) => num > 2);
let two = numList.find((num) => num = 2);
let two2 = numList.find((num) => num === 2);
console.log(results, two, two2);

let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

const enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;
console.log(Color.Blue);
console.log(c);

let swapNums: [number, number];
function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums[0]);
console.log(swapNums[1]);

let department: any; //do not use it
department = "IT";
console.log(department);
department = 10;
console.log(department);