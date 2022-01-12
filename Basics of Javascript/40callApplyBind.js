


function extractData(arg1, arg2, arg3){
    console.log(arg1, arg2, arg3);
    console.log(this);
    console.log(`this == userinfo -> ${this===userInfo}}`);
    console.log(`this == userinfo2 -> ${this===userInfo2}}`);
    console.log(`Name: ${this.theName}, Age: ${this.age}, Branch: ${this.branch}`);
}


const userInfo = {
    theName : "Pawan bhatt",
    age : 21,
    course : 'btech',
    branch : 'cse',
};


const userInfo2 = {
    theName : 'Ishita Kumari',
    age : 21,
    course : "bsc",
    branch : "industrial chemistry"
}
//                            CALL
// userInfo2.extractData(); To solve this problem we use .call
// When method was inside an object following was happening :
//  ""   userInfo.extractData.call(userInfo);      "
// so, "  userInfo.extractData, call makes this a function and then with use of call paramter we can give any object and change the methods refrence to the particular object that has been given by us as the call argument. "

// extractData.call(userInfo,69,420);
// extractData.call(userInfo2,1,1);



//                            APPLY
// apply is all same as call , but only diffrence is when using apply we give arguments required by the method/function as an ARRAY containing all arguments instead of passing comma separated arguments.

// extractData.apply(userInfo,[1,2,3]);
// extractData.apply(userInfo2,[1,2,3]);



//                                 BIND
// the work of bind is to bind the method/function with the reference to a particular object, and assign it to a variable.

const dataUser1 = extractData.bind(userInfo); // now the function is binded to the object userInfo.So, dataUser1 is now a function which can be called anytime which contain the method which is refering to the object=userInfo.
dataUser1(); 