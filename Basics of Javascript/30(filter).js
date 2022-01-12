
const array = [2,3,4,5,6,7,8,9,10,11,12,13];

const isPrime = function(num){
    for(let i=2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

const primeFiltered = array.filter(isPrime);
console.log(primeFiltered);
