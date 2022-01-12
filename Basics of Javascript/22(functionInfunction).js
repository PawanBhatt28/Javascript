
function outer(){
    const inner1 = () => console.log("Welcome to the inside of `Outer` function.");
    const inner2 = () => 2*2*2*2;

    const inner3 = function(){
        console.log("thankyou for coming by, bye-bye");
    }

    inner1();
    console.log(inner2()) ;
    inner3();
}