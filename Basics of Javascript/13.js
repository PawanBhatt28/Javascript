// Array Destructing

const myArray = ["value1","value2","value3","value4"];
// var item1 = myArray[0];/
// var item2 = myArray[1];
// console.log(item1,item2);


// let myNewArrya = myArray.slice(2);
// console.log (myNewArrya);
var [var1, var2,...myNewArray] = myArray;
console.log(var1,var2);
console.log(myNewArray);
