//                                                 Method

const userInfo = {
    name : "Pawan bhatt",
    age : 21,
    course : 'btech',
    branch : 'cse',
    extractData : () => {
        console.log(`Name: ${userInfo.name}, Age: ${userInfo.age}, Branch: ${userInfo.branch}`);
    }
};

const user = userInfo.extractData;
console.log("Extrating data...");
user();