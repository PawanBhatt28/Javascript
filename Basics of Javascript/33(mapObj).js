
// in object literals, typeof keys are always in either "String"
// or "Symbol".

// const person = {
//     firstName : "Pawan bhatt",
//     age : 21,
//     1 : "one"
// }
// for(let key in person){
//     console.log(key, typeof(key));
// }

// // MAP

// const person = new Map();

// person.set("firstName","Pawn bhatt");
// person.set("Instagram","pawanisme.meispawan");
// person.set(69,"position, good");
// person.set([1,2,3,4],"arrayAsKey");
// person.set({'heh':"heheh"},"objectasKey");

// for(let [key,value] of person){
//     console.log(key, value);
// }

// ELements inside Map stays in order.
const person1 = {
    id : 1,
    name : "Harshit"  
}

const userInfo = new Map();
userInfo.set(person1.id);

console.log(userInfo)


// const person = new Map([['firstName','Pawan bhatt'], ['age',21]]);
// console.log(person);
// //// console.log(person.get(69));
// console.log(person.keys());
// console.log(person.values());
// console.log(person);