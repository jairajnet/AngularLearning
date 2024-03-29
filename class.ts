// to import the interface from another file
import { Login, User } from "./interface"; // this statement will import the exported methods from the interface.ts file.

//implement an interface in class
interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee {
  //id : number; its a public
  #id: number; // access modifier. # turns it into private variable
  name: string;
  //address : string;
  address: Address; //

  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  //methods in class
  getNameWithAddress(): string {
    // return this.name + " " + this.address;
    return `${this.name} stays at ${this.address}`; // use of string literals
  }

  //static   this method can be called with the name of the class but not with the instance of the class
  static getMemberCount(): number {
    return 50;
  }
  //----------------------------------------

  //getter and setter
  get empID(): number {
    return this.#id;
  }
  set empID(id: number) {
    this.#id = id;
  }
  //--------------------------------------

  Login(): User {
    return { name: "Jairaj", age: 40, email: "", id: 1 };
  }
}

// polymorphysm with new class
class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }
}

let emp = new Employee(1, "Jairaj", {
  street: "ABC",
  city: "Udaipur",
  pin: "313001",
  state: "Rajasthan",
});
console.log(Employee.getMemberCount());

//let Manager1=new Manager(2,'Dhivi','Pannashray');
emp.empID = 100;
console.log(emp);
console.log(emp.getNameWithAddress());
console.log(emp.Login());
//console.log(Manager1.getNameWithAddress());

//use the interafce
