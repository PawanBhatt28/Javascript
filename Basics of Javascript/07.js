// let age = 18;

// if (age > 18){
//     console.log("Damn son you fuckin kid, go to bed!");
// }else{
//     console.log("damn come on son! You old Faggot!");
// }

// let number = 123;

// if (number%2==0){
//     console.log("EVEN");
// }else{
//     console.log("ODD");
// }

// let firstName = "" ;

// if (firstName){
//     console.log(firstName);
// }else{
//     console.log("first nme kinda empty");
// }

//TERNARY OPERATOR

// let age = 5;
// age += 11

// let drink = (age>6)? damnson(): "Milk";
// function damnson(){
//     return "you old faggot drink this beer";
// }
// console.log(age);
// console.log(drink);


// AND , OR operator

let firstName = "Pawan Bhatt";
let age = 21;
let message = firstName[0] == "P" ? `your name is ${firstName} and starts with ${firstName[0]}`:"damn you bitch!";
console.log(message);

if (age > 18 && firstName[0] == "p"){
    console.log("you above 18 and name starts with p");
}else if (age > 18 || firstName[0] == "P"){
    console.log("come in bro");
}
else{
    console.log("Hello motherfucker!")
}

//Nest