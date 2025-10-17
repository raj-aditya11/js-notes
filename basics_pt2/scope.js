//scope is denoted by curly braces({})
let d = 40
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    let d = 3;
    console.log(`inner value of d = ${d}`);        //prints "inner value of d = 3", local scope
}
//console.log(a);             //a is not defined outside the scope
//console.log(b);             //c is not defined outside the scope
console.log(c);             //prints value of c that is 30, because var does not follow scope
console.log(d);             //prints 40, global scope


//global scope in node is different from the core scope in console on the browser


//nested scope
function one(){
    const username = "AAdi";

    function two(){
        const website = "google";
        console.log(username);              //this can access username as the function two() lies in the scope of one()
    }

    //console.log(website);                //cannot access website as the scope of function two() ended before this line

    two();
}

one();

//in nested functions only child functions can access the variables of parent function but the parent cannot access the variables of child functions, also called "closure" in functions

//closure in loops
if(true){
    const username = "aditya";
    if(username === "aditya"){
        const website = " youtube";
        console.log(username + website);           //prints aditya youtube as this scope lies in the previous scope
    }
    //console.log(website);              //gives error as the scope of the loop containig website has ended
}
//console.log(username);            //gives error as the scope of the loop containig username has ended


//hoisting
addOne(3);                 //works perfectly fine
function addOne(num){          //normal function declaration
    return num + 1;
}

addTwo(4);             //gives error as in case of function declaration using expression, we need to call the funtion after it's declaration
const addTwo = function(num){          //function declaration using expression 
    return num + 2;
} 