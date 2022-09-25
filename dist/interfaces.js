"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", age: 30, id: 1 };
let { name: username, age } = { name: "John", age: 30, id: 1 };
let employee = { name: "John", id: 1, age: 25, salary: 1000 };
let [user1, user2, ...rest] = [
    { name: "John", age: 30, id: 1 },
    { name: "Mike", age: 50, id: 2 },
    { name: "Tom", age: 25, id: 3 },
    { name: "Ben", age: 20, id: 4 }
];
console.log(user2);
console.log(...rest);
console.log(...rest.filter(user => user.age < 25));
//# sourceMappingURL=interfaces.js.map