"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Jairaj",
    age: 40,
    email: "jairajdev.net@gmail.com",
    id: 1,
};
let user2 = { name: "Jairaj", email: "jai@", id: 1 }; // age is optional in this case.
//object de-structuring --> instead of writing obj.member, we can write the code like below
let { name: empname, email: userID } = user;
console.log(empname);
console.log(userID);
let emp1 = { id: 1, email: "Hello@", name: "Kinjal", salary: 30000 }; // salary property added in the employee interface
