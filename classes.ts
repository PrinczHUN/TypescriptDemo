import { Login, User } from "./interfaces";

class Employee implements Login {
    private id: number;
    protected name: string;
    address: string;

    get empId(): number {
        return this.id;
    }

    set empId(id: number) {
        this.id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    Login(): User {
        return { name: "John", age: 30, id: 1 };
    }

    getNameWithAddress(): string {
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
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
}

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());

console.log(Employee.getEmployeeCount());

john.empId = 100;
console.log(john.empId);