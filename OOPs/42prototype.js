//              PROTOTYPE


function myData(){
    let theName = "Pawan bahtt";
    let theAge = 21;
    console.log(`My name is ${theName} and age is ${theAge}`);
}

myData.prototype.secretCode = "shhhh, it's very secret.";
myData.prototype.password = "qwerty12345";
console.log(myData.prototype);


console.log(myData);

// so prototype is a object that is inbuilt created inside the function
// and function also behaves like a object.
// as default there is only one key:value inside prototype, i.e constructor : function itself.
// We can also make new key:value pair inside prototype and make it a valuable and useful object, that...
// can be used with the help of function is inside.