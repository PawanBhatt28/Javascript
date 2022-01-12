// map method

const array = [2,3,4,5,6,7,8,9,10];

const findPrime = function(num){
    for(let i=2; i<num; i++){
        if (num%i==0){
            return num;
        }
    }
    return `Prime:${num}`;
}
console.log(findPrime(8));

const primeArray = array.map(findPrime);
console.log(primeArray);