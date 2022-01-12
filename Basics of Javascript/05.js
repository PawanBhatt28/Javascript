//DATA TYPES


//Primitive data types
//  string
// numbers,NaN
// booleans
// undefined
// null
// BigInt
//Symbol


let num = BigInt(12123);
let num2 = 123132123123123213n;

//typeof

let age = 123;
let myname = "Neetika Shai";

console.log(typeof(age));
console.log(typeof(myname));

// // // numbner -->> string

// // age = age + "";
// // console.log("with adding '' "+ typeof(age));
// // let age2 = 21;
// // age2 = age2.toString();
// // console.log("with toString() method " + typeof(age2));

// // // string -->
// // let string = "1910";
// // console.log(typeof(string));
// // string = + string;
// // console.log(typeof(string));

// // let age = 15;

// // age = String(age);
// // console.log(typeof age);
// // age = Number(age);
// // console.log(typeof age);

// // String concatenation
// // let firstName = "Pawan";
// // let lastName = "Bhatt";

// // let fullName = firstName +" " + lastName;
// // console.log(fullName);


// let string1 = "123";
// let string2 = "112";

// let newString = + string1 + + string2;

// console.log(newString);

// //template string;

let ageMahor = "20";
let nameMahor = "Yash Mahor";

let sentence = "My name is " + nameMahor+ "and age is " + ageMahor;
let sentence2 = `My name is ${nameMahor} + and age is ${ageMahor}` ;
// let age = 21;
// let herName = "Pawan Bhatt";

// let sentence = `my name is ${herName} and age is ${age}`;
// console.log(sentence);

// //Undefined
// let thisString;
// console.log(typeof thisString);
// var vatString= 12;
// var myVariable = null;
// console.log(myVariable, typeof myVariable);
// // type of null is null but Javascript shows it as Object which is not and its a  BUG, and reason for not removing this bug is tht millions of programs has been written accordingly and if now it changes everything has to be re-written so they thought to let it be/

// // console.log(typeof vatString);

// //BigInt

// let myNumber  = BigInt(12321312312312312312312312312312312312312312312312313213123123123);
// console.log(myNumber);
// let bigint2 = 123131n;
// console.log(typeof bigint2,bigint2 )
console.log(Number.MAX_SAFE_INTEGER);
