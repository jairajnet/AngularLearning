class Employee {

    //id : number; its a public
    #id:number // access modifier. # turns it into private variable
    name : string;
    address : string;

    constructor(id:number,name:string,address:string){
        this.#id=id;
        this.name=name;
        this.address=address;
    }

    //methods in class
    getNameWithAddress(): string{
       // return this.name + " " + this.address;
       return `${this.name} stays at ${this.address}`;  // use of string literals
    }

    //static   this method can be called with the name of the class but not with the instance of the class
    static getMemberCount():number{
        return 50;
    }
    //----------------------------------------

    //getter and setter
    get empID():number{
        return this.#id;
    }
    set empID(id:number){
        this.#id=id;
    }
    //--------------------------------------
}

// polymorphysm with new class
class Manager extends Employee{
    
    constructor (id:number,name:string,address:string){
        super(id,name,address);
    }
}

let emp=new Employee(1,'Jairaj','John Street');
console.log(Employee.getMemberCount());

let Manager1=new Manager(2,'Dhivi','Pannashray');
emp.empID=100;
console.log(emp.empID);
console.log(emp.getNameWithAddress());
console.log(Manager1.getNameWithAddress());

