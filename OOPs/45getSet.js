

class UserProfile{

    constructor(firstName, lastName, email, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

        console.log(this.password);
        console.log("We got your firstname, lastname, email and passowrd(encrypted).")
    }

    welcome(){
        console.log("Welcome to the Website son!!");
    }

    get encrpyt(){
        const thePassword = this.password;
        const theEncrypted = "465sg!@" + thePassword.slice(0,4) + "sv798" + thePassword.slice(4);
        return `Encrypted Password : ${theEncrypted}`;
    }

    set updatePassword(newPasword){
        this.password = newPasword;
        // console.log(this.password)
        // console.log("Your password has been updated.")
    }
}


const user1 = new UserProfile('pawan','bhatt','pawanbhatt@gmail.com','godisnowherE@123');

user1.welcome();

const encrpytedPass = user1.encrpyt; //with the help of 'get' we can use any instance(function inside class) as a property of the class.

console.log(encrpytedPass);

user1.password = 'damnsonthisisstrongPassword' ;
console.log(user1.password);