// nested if else


// let winNum = 19;
// let userGuess = Number(prompt("Guess a number : "));

// if (userGuess >  19){
//     console.log("Higher than winning number.");
// }else{
//     if (userGuess < 19){
//         console.log("Lower than winning number");
//     }else{
//         if(userGuess == 19){
//             console.log("Winning Price $1,000,000,000");
//         }
//     }
// }
// console.log(typeof userGuess);

let day = 4;

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thurday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Damn! Wrong Input");
}