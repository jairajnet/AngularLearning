interface User {
  name: string;
  age?: number; // we have made this optional by putting ? after the variable name
  id: number;
  email: string;
}

let user: User = { name: "Jairaj", age: 40, email: "", id: 1 };
let user2: User = { name: "Jairaj", email: "jai@", id: 1 }; // age is optional in this case.

//extend User interface in another interface
interface Employees extends User {
  salary: number;
}
let emp1: Employees = { id: 1, email: "Hello@", name: "Kinjal", salary: 30000 }; // salary property added in the employee interface
