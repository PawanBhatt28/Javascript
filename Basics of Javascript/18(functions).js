const singHappyBirthday = function(){
    console.log("Happy Birthday to you made god bless you!")
}


// function findfind(array,num){
//     for (let i=0;i < array.length; i ++){
//         if (array[i] === num){
//             return `Found at Index ${i}`;
//         }
//     }
//     return `Not Found!`;
// }

// console.log(findfind([1,2,3,4,5],5));


// Function Expression
const ifPrime = function(num){
    for(let i=2; i<num; i++){
        if (num % i == 0){
            return `${num} is not a prime number.`;
        }
    }
    return `${num} is a prime number.`;
};

console.log(ifPrime(21))
