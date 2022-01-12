// Reduce Method

const array = [1,2,3,4,5];

const sum = array.reduce((accumulator, currentValue)=>{
    return accumulator * currentValue;
},1) // can (should) give initial value of accumulator

console.log(sum);


const userCar = [
    {id:1, count:4, price:1200},
    {id:2, count:23, price:13555},
    {id:3, count:2, price:99999999}
];

const priceSum = userCar.reduce(( accumulator,currentValue )=>{
    return accumulator + currentValue.price;  
},0)

console.log(priceSum);
