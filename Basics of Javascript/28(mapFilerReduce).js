// .foreach


function double(num){
    console.log(num*2) ;
}

// const array = [1,2,3,4,5];
// const array2 = array.forEach(double);

//method two

// array.forEach(function(num){console.log(num*2)});

const user = [
    {firsname:"Pawn bahtt",age:123},
    {firsname:"Pawn asdasdasda",age:112323},
    {firsname:"yo yo yo",age:45},
    {firsname:"asasdasdasd",age:1},
]


user.forEach(function(obj){
    const {firsname} = obj;
    console.log(firsname);
})

//arrow function

user.forEach( (obj)=>{console.log( obj.firsname)  })