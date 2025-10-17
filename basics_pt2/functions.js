//declaration
function sayMyName(){
    console.log("J")
    console.log("O")
    console.log("H")
    console.log("N")
    console.log("D")
    console.log("O")
    console.log("E")
}

//calling
sayMyName();             //sayMyName acts as a reference to the function

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers();        //gives NaN as no arguments given
addTwoNumbers(3,6);
addTwoNumbers(3,'a');   //gives 3a as js treats 3 as a string and hence concatenates the two 
addTwoNumbers(3,null)    //gives 3 + 0 = 3 as null is treated as 0 in arithmetic operations
const result = addTwoNumbers(3,5);      //print the sum of the passed arguments
console.log(`Result: ${result}`);        //gives undefined as functions returns no value, it only prints the value

function sum(number1, number2){
    return number1 + number2;
    console.log("John Doe") //unreachable code,this line will not be executed as the function has already returned a value
}
const result1 = sum(3,5);
console.log(`Result: ${result1}`);

function loginUserMessage(username){
    return `${username} just logged in!!!`;
}
console.log(loginUserMessage("Aditya"));
console.log(loginUserMessage());               //gives "undefined just logged in" as no argument is passed


function message(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    else{
        return `${username} just logged in`;
    }
}
console.log(message());
console.log(message('Raj'));

//using the exclamatory(!) 
function message1(username){
    if(!username){                                 //undefined is treated as false and ! runs when the statement is false
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(message1());
console.log(message1('Raj'));

//using default value
function message2(username = "John"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(message2());
console.log(message2('Raj'));

function calculateCartPrice(...num1){              //rest operator, takes all the arguments in one parameter as an array
    return num1;
}
console.log(calculateCartPrice(2000,3000,4000));

function anotherCartPrice(val1, val2, ...val3){      //rest operator takes the remaining arguments
    return val1,val2,val3;
}
console.log(anotherCartPrice(200,400,5000,6000));

//Passing objects to functions
const user = {
    username: "G.I.Joe",
    price: 200
}
function handleObject(anyobject){
    return `Username is ${anyobject.username} and the price is ${anyobject.price}`;
}
console.log(handleObject(user));
//OR
console.log(handleObject({
    username: "Jane Doe",
    price: 499
}));

//Passing arrays to functions
const myNewArray = [1,2,3,4,5,6,7,8];
function secondElement(anyarray){
    return anyarray[1];
}
console.log(secondElement(myNewArray));
//OR
console.log(secondElement([12,23,34,45,56,67,78,89]));