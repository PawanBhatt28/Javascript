
//                                                                  Optional Chaining
const userInfo = {
    firstName: 'pawan',
    lastName : 'bhatt',
    age : 21,
    branch : "cse",
    interest : {tech:['blockchain','ai','networking'], misc : ['photography','gaming'] }

}

// const datafetch = userInfo.firstName;
// console.log(datafetch);
// console.log(userInfo.rollNo); // Output - undefined , because we were finding rollNo(doesn't exist) inside userInfo(does exist)
                             //          so we got our output as undefined. i.e the key we are looking inside an object is undefined.
                             
// console.log(userInfo.rollNo.uroll); // Output - "Error, cannot find inside undefined", because here were finding uroll inside rollno...
                                    //  which should exist inside userInfo object, but as even rollno is not defined that's why....
                                    // with this query - "unserInfo.rollno.uroll" .i.e, as the "userInfo.rollno" = undefined...
                                    // so, we are finding .uroll inside an undefined, therefore we get an ERROR, to fix this we do OPTIONAL CHAININg.


const rollNumber = userInfo?.rollno ;
console.log(rollNumber);

const uroll = userInfo?.rollno?.uroll ;

console.log(uroll);

console.log(rollNumber === uroll);