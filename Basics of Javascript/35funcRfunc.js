
function manyFunction(request){
    function checkodd(num){
        return num % 2 != 0;
    }

    function checkEven(num){
        return num % 2 == 0;
    }

    function checkPrime(num){
        if (num == 2){
            return true;
        }return false;
    }

    function encoder(password){
        let decoded = "ahd12131232b1h3g123!@#!@#";
        return decoded;
    }

    if (request === 'odd'){
        return checkodd;
    }else if(request === 'even'){
        return checkEven;
    }else if(request === 'prime'){
        return checkPrime;
    }else{
        return "Request cannot be satisfied.";
    }
}


response = manyFunction('prime');

console.log(response);

ans = response(2);

console.log(ans);