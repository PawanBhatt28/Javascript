// Primitive Types
// numbers, strings, etc.. (yet i dk)

let string1 = "Pawan bhatt";
let string2 = string1;
console.log(string1);
console.log(string2);

string1 += "bhatt";
console.log("string1 : " + string1);
console.log("stirng2 :  "+ string2);

console.log("we saw that any change in string1 is not reflected in string2 because when decalared both string1 and string 2 got diffrent memory locations.")

// Reference Types
//list etc .. (yet I dont know)

let arr1 = [1,2,3];
let arr2 = arr1;

console.log(`arr1 : ${arr1}`);
console.log(`arr2 : ${arr2}`);

arr1.push(5);
console.log(`arr1 : ${arr1}`);
console.log(`arr2 : ${arr2}`);

console.log("Here, we we observed that any change in array1 is reflected in array2 because they have diffrent variables name both are pointing to same location in memory, that is the location of array1");

arr2.push(234);
console.log(`arr 1 ${arr1}`);
console.log(`arr 2 ${arr2}`);

console.log("here we obseved a new thing that, any change in any of the array is reflected in both the arrays, whethere is array1 or arary2 because both variable pointing to same location.")
