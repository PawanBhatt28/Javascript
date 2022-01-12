// //                                                      Foreach method

// let array = [1,2,3,4,56,7,8];

// array.forEach((number,index)=> {
//     console.log(number*2);
// })

// // let users = [
// //     {firstName: "Pawan bhttt", age: 21},
// //     {firstName: "Ishita", age: 23},
// //     {firstName: "Yash", age: 12},
// // ]

// users.forEach((userInfo)=>{
//     console.log(userInfo["firstName"]);
// });

// //                                                         Map Method

// const evenNull = array.map((number)=> {
//     if(number%2==0){
//         return number;
//     }return -1;
// })
// console.log(evenNull);


// const users = [
//     {firstName : "Pawan", age: 21},
//     {firstName : "Ishita", age: 21},
//     {firstName : "Yash", age: 19},
//     {firstName : "chuchu", age: 20},
//     {firstName : "Deepanshu", age: 19},
// ];


// const damnuser = users.map((userInfo) => {
//     return [userInfo["firstName"],userInfo["age"]];
// })

// console.log(damnuser);

// //                                                            Filter Method

// const maybePrimes = [2,3,4,5,5,6,7,7,8,9,11,13,14,151,16,17];

// const prime = maybePrimes.filter((number) => {
//     for(let i=2;i<number; i++){
//         if(number%i == 0){
//             return false;
//         }
//     }return true;
// })

// console.log(prime);
// //                                                            Reduce Method


// const multiply = array.reduce((accumulator, currentValue)=>{
//     return accumulator * currentValue;
// },1)

// console.log(multiply);

// const cart = [
//     {userId: 1, price:12000},
//     {userId: 2, price:1500},
//     {userId: 3, price:20000},
//     {userId: 4, price:500},
// ]

// const cost = cart.reduce((totalCost, currentProd) => {
//     return totalCost + currentProd.price;
// },0)
// console.log(cost);
// //                                                            Every Method

// const array = [1,2,3,4,5,6,7,8,9,10];
// const array2 = [2,4,6,8,10];
// const ans = array2.every((number)=>{
//     return number%2===0
// });
// console.log(ans);

// //                                                            Some Method

// const array = [1,2,3,4,5,6,7,8,9,10];
// const array2 = [4,6,8];

// const ans = array2.some((number) => {
//     for(let i=2;i<number;i++){
//         if(number%i==0){
//             return false;
//         }
//     }return true;
// })

// console.log(ans) 
// //                                                            Fill Method
// const array = [1,2,3,4,5,6,7,8,9,10];

// const ans = array.fill(-1,4);
// console.log(ans);

// //                                                            Splice Method
const array = [1,2,3,4,5,6,7,8,9,10];

// const ans = array.splice(5,5); // returns the delete array

// console.log(`Original arary ${array}`);
// console.log(ans);

array.splice(0,0,-5,-4,-3,-2,-1);
console.log(array);