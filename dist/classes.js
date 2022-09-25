"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
    static getEmployeeCount() {
        return 50;
    }
    Login() {
        return { name: "John", age: 30, id: 1 };
    }
    getNameWithAddress() {
        return `${this.name} ${this.address}`;
    }
}
let john = new Employee(1, 'John', 'Highway 71');
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 71';
console.log(john);
let nameAndAddress = john.getNameWithAddress();
console.log(nameAndAddress);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
console.log(Employee.getEmployeeCount());
john.empId = 100;
console.log(john.empId);
//# sourceMappingURL=classes.js.map