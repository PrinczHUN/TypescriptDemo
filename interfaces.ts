export interface User {
    id: number;
    name: string;
    age: number;
    email?: string;
}

let user: User = { name: "John", age: 30, id: 1 };

let { name: username, age }: User = { name: "John", age: 30, id: 1 };

interface Employee extends User {
    salary: number;
}

let employee: Employee = { name: "John", id: 1, age: 25, salary: 1000 }

export interface Login {
    Login(): User;
}

let [user1, user2, ...rest]: User[] = [
    { name: "John", age: 30, id: 1 },
    { name: "Mike", age: 50, id: 2 },
    { name: "Tom", age: 25, id: 3 },
    { name: "Ben", age: 20, id: 4 }
]

console.log(user2);
console.log(...rest);
console.log(...rest.filter(user => user.age < 25));