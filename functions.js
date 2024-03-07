"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// method 1
// if we put ? after the variable it becomes optinal parameter
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2; // if num3 exists then add num3 else only num1+num2
}
console.log(add(2, 3));
console.log("Optional parameter add : ", add(2, 3, 5));
//method2
// required parameter. declare the variable and set it with any value will make it required parameter
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
console.log("Required parameter Subtract : ", sub(2, 3, 5));
//mentho3
const mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(2, 3));
//rest parametrs example
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log(add2(2, 3, ...[5, 6, 7]));
