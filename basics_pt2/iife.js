//Immediately Invoked Function Expression(IIFE)
(function chai(){                 //named iife
    console.log(`DB connected`);
})();                      //first parentheses is for the function definition and second is for invoking the function

//iife is used to prevent the pollution from global scope variables
//iife needs to be ended by a semicolon(;) else it won't know where to end 

(()=>{
    console.log(`ARROW FUNCTION IN IIFE`);
})();

//passing arguments to iife
((name)=>{
    console.log(`${name}, IS ONLINE`);
})("RAJ");
