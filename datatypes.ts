//let fname='Jairaj';
let lname : string;
lname="Jairaj";
console.log("Original name : "+lname);
let NewName=lname.toUpperCase();
console.log("New name : " + NewName);

//Number
let age : number;
age=25;

let dob="25";
let newAge =parseInt(dob)+age;
console.log(newAge);

//boolean
let result:boolean;
//console.log(result);  this will give an error because there is no defaukt value set to false. In typescript we have to set it to true or false
result=true;
console.log(result);

//Array
// below 2 lines : we can declare the array as we like like below lines.
let empList:string[];
let deptlist:Array<number>;

empList=["Jairaj","Santosh","sandeep"];
deptlist=[1,3,4,9,12,4];

let result1=deptlist.filter((abc)=>abc>3);
console.log(result1);

let web=deptlist.find((x)=>x===4);
console.log(web);

//enum
enum color{
    red,green,blue, yellow
}
let c : color= color.yellow;
console.log(c);

