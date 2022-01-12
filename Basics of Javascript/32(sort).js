const array = [1,11,12,45,89,1000,11545,1021039];


// simple providing sort to an array doesnt sort it as we expect, but it sort it in string 'word dictionary' like order
// so to sort the array as we expect, we gotta give the 
// function the javascript uses to sort the arrays

array.sort( (a,b) => {return a-b} );//sorted in ascending order
// if return is negative it doesn't flip, otherwise it flips.
// and instead of number it can be anything like objects and stuff.
console.log(array); 

array.sort( (a,b) => b-a );
console.log(array);