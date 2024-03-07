"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        // return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
}
let emp = new Employee(1, 'Jairaj', 'John Street');
console.log(emp);
console.log(emp.getNameWithAddress());
