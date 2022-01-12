 console.log(fruit);

 let mixedArray = ["1198","Pawan bhatt",21,[89,99,98,87,100]];

//changing array items;
console.log(fruit);
fruit[1] = "banana";
console.log(fruit);

// ARRAYS are REFERENCE TYPE 
console.log(typeof fruit);
let string = "Pawan";
console.log(Array.isArray(string));
console.log(Array.isArray(fruit));


//array PUSH POP
let fruit = ['apple','mango','pineapple'];

fruit.push("mango");
console.log(fruit);

let poppedFruit = fruit.pop();
console.log(fruit);
console.log(poppedFruit);

// .unshift
fruit.unshift("kiwi");
fruit.unshift("fruit 2");
fruit.unshift("fruit 4");
console.log(fruit);
fruit.shift();
console.log(fruit);
