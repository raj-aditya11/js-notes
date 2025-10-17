//JS is a dynamically typed language as it automatically determines the data type of a variable at runtime
// Primitive
/*
7 types:
string, number, boolean, null, undefined, symbol, bigint
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let username;

const id = Symbol('123')               //symbol is used to make the value unique
const anotherId = Symbol('123')

console.log(id === anotherId);         //false

const bigNumber = 3456789n             //placing n after the number makes it a bigint


// Reference  (Non Primitive)
/*
array, objects, functions
*/ 

const heros = ["shaktiman", "naagraj", "doga"];        //array

const obj = {                                    
    name: "aadi",
    age: 19,         
}                                        //object

const myFunction = function(){
    console.log("Hello World");
}                                         //function

console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof username);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof obj);
console.log(typeof myFunction);

/*
Return type of variables in JavaScript
1. string => string
2. number => number
3. boolean => boolean
4. null => object
5. undefined => undefined
6. symbol => symbol
7. bigint => bigint
8. array => object
9. object => object
10. function => function
*/



//----------------------------------------------------------------------------------------------------------------//

// Stack(primitive), Heap(non-primitive)

let myName = "Aditya"
let anotherName = myName
anotherName = "Adii"
console.log(myName);
console.log(anotherName);                //no change in myName but anotherName changes due to stack memory


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "aadi@google.com";

console.log(userOne.email)
console.log(userTwo.email)                //changes value of email in both userOne and userTwo