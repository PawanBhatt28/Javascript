//callback just means giving a function as a argument in a funtion and using/calling the function in a function as parameter

function func1(callback){
    console.log("Inside function 1");
    console.log("Calling the given function...");

    callback();
}

function damnSon(){
    console.log("This is a sick ass function.");
}

func1(damnSon);