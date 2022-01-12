
const myName = "Jessi";

function innerGlobal(){

    function inside1(){

        function inside2(){


            function inside3(){
                console.log("Welcome to Inside3.")
                console.log(`My name is ${myName} - My Name is ${myName}.`);
            }

            console.log("Welcome to Inside2.");
            inside3();
            
        }

        console.log("Welcoe to Inside1.")
        inside2();

    }
    
    console.log("Welcome to innerGlobal");
    inside1();
}

innerGlobal();