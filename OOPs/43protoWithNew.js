
function userDataInput(theName, age, gender, email, pass, confirmpass, ){

    this.theName = theName;
    this.gender = gender;
    this.age = age;
    this.email = email;
    this.pass = pass;
    this.confirmpass = confirmpass;

    console.log(this);
}

const thePrototype =  userDataInput.prototype;
thePrototype.secretCode = "Damn son, she pretty thicc!!";
thePrototype.oName =  function(){
                    userName = [...(this.theName)];
                    return userName.every( (char) => typeof(Number(char)) === typeof(45) );
                };

thePrototype.oPassword =  function(){
                    pass1 = this.pass;
                    pass2 = this.confirmpass;
                    return pass1 === pass2;
                };


/*
    Now we have created this function, and we have studied Prototype. so, now we can use prototype store methods...
    instead of creating new method. 
    then we don't have to use Proto (__proto__) chaining;
    And making use of prototype goes as follow : 
*/

const user1 = new userDataInput('paw1an bhatt',21,'male','pawan@gmail.com','qwerty12','qwerty12');
console.log(typeof user1);

console.log(user1);

console.log(user1.oName());

console.log(user1.oPassword());


console.log(user1.secretCode);

console.log("userDataInput function's prototype after changes : ");
console.log(userDataInput.prototype);

console.log(user1.oPassword());
console.log(user1.oName());