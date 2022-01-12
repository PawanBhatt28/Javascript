// cloning an array

let array1 = [1,2,3,4,5,6];
let array2 = array1;
console.log(array1===array2);

// first method - slice is fastest.
let array3 = array1.slice(0);
console.log(array3 === array1);

//second method
let array4 = [].concat(array1);
console.log(array4 == array1);

// fourth method
let array5 = [...array1];
console.log(array5);
console.log(array1 === array5);


let array6 = [2,3,4,5,6];
let array7 = [23,423423,4234,234,654,64];
let array8 = [...array6,...array7];
console.log(array8);