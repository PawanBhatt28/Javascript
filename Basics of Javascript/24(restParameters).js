
const addAll = function(...array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    return sum;
}



console.log(addAll(1,2,3,3,4,5,6,6,10));
