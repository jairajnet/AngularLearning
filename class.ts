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
}

let emp=new Employee(1,'Jairaj','John Street');


console.log(emp);
console.log(emp.getNameWithAddress());
