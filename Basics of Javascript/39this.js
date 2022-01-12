//                                          This

const userInfo = {
    theName : "Pawan bhatt",
    age : 21,
    course : 'btech',
    branch : 'cse',
    extractData : function(){
        console.log(this);
        console.log(this == userInfo);
        console.log(`Name: ${this.theName}, Age: ${this.age}, Branch: ${this.branch}`);
    }
};

// userInfo.extractData();


// {theName : "Ishita Kumari"};

function extractData(){
    console.log(this);
    // console.log(this == userInfo);
    console.log(`Name: ${this.theName}, Age: ${this.age}, Branch: ${this.branch}`);
}

// extractData();
// window.extractData();

const userInfo2 = {
    theName : "Ishita",
    age : 21,
    course : 'bsc',
    branch : 'industrial chemistry'
}

// userInfo2.extractData(); CANNOT CALL method of another object with reference to diffrent object in which the method id not defined.

// const ishitaData = userInfo.extractData.call(userInfo2);
