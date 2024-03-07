"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
class Employee {
    constructor(id, name, address) {
        //id : number; its a public
        _Employee_id.set(this, void 0); // access modifier. # turns it into private variable
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    //methods in class
    getNameWithAddress() {
        // return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`; // use of string literals
    }
    //static   this method can be called with the name of the class but not with the instance of the class
    static getMemberCount() {
        return 50;
    }
    //----------------------------------------
    //getter and setter
    get empID() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empID(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
// polymorphysm with new class
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let emp = new Employee(1, 'Jairaj', { street: "ABC", city: "Udaipur", pin: "313001", state: "Rajasthan" });
console.log(Employee.getMemberCount());
//let Manager1=new Manager(2,'Dhivi','Pannashray');
emp.empID = 100;
console.log(emp);
console.log(emp.getNameWithAddress());
//console.log(Manager1.getNameWithAddress());
