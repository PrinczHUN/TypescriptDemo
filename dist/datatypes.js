"use strict";
let lname;
lname = "Santosh";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
let depList;
empList = ["Santosh", "Santosh1", "Santosh2"];
let numList;
numList = [1, 2, 3, 4, 5, 6];
let results = numList.filter((num) => num > 2);
let two = numList.find((num) => num = 2);
let two2 = numList.find((num) => num === 2);
console.log(results, two, two2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Blue */;
console.log(2 /* Color.Blue */);
console.log(c);
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums[0]);
console.log(swapNums[1]);
let department; //do not use it
department = "IT";
console.log(department);
department = 10;
console.log(department);
//# sourceMappingURL=datatypes.js.map