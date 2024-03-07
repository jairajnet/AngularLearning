"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let emp = new Employee(1, 'Jairaj', 'John Street');
let emp2 = new Employee(1, 'Hemant', 'Nagda');
console.log(emp);
console.log(emp2);
