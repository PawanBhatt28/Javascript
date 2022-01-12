

const userAuthenticators = {

    secretCode  : "Damn son, she pretty thicc!!" ,

    oName : function(){
        userName = [...(this.theName)];
        return userName.some( (char) => typeof(Number(char)) === typeof(45) );
    },

    oPassword : function(){
        pass1 = this.pass;
        pass2 = this.confirmpass;
        return pass1 === pass2;
    }

}

function userDataInput(theName, age, gender, email, pass, confirmpass, ){

    const userInfo = Object.create(userAuthenticators);

    userInfo.theName = theName;
    userInfo.gender = gender;
    userInfo.age = age;
    userInfo.email = email;
    userInfo.pass = pass;
    userInfo.confirmpass = confirmpass;

    return userInfo;
}

const user1 = userDataInput('pawan bhatt',21,'male','pawan@gmail.com','asd','qwerty12');

console.log(user1);

console.log(user1.oName());

console.log(user1.oPassword());


console.log(user1.secretCode);
