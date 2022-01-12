
function user(firstname, age){

    let secretcode = "damn, this is a secret code";
    
    this.thename = firstname;
    this.theage = age;

    console.log(this);
    console.log(123);
    console.log(this.thename);

}


const userData = new user('Pawan Bhatt',21);

// console.log(userData)