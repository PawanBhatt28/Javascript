
function checkEven(number){
    // console.log(number%2==0)
    return number%2==0;
}

function checkPrime(number){
    if(number == 2){
        return true;
    }
    for (let i=2; i < number; i++){
        if (number%i==0){
            return false;
        }
    }
    return true;
}

function checkBoth(even, prime, num){

    cond1 = even(num);
    cond2 = prime(num);
    // console.log(cond1,cond2);
    if(cond1 == true && cond2 == true){
        return "Number is both Even and Prime.";
    }else if(cond1 == false && cond2 == false){
        return "Number is neither Even nor Prime.";
    }else{
        return "Number is either Even or Prime.";
    }
}

answer = checkBoth(checkEven, checkPrime, 158);

console.log(answer);