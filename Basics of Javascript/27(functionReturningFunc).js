


function myFunc(){

    function isEven(num){
        if(num%2==0){
            return "EVEN";
        }
        return "ODD";
    }
    
    return isEven;
}

const evenOddChecker = myFunc();
const number = 4421;
console.log(evenOddChecker(number));