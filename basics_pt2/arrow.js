//"this" keyword 
const user = {
    username: "aditya",
    price: 99999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);           //"this" refers to the current context
        console.log(this);                     //prints the values in the current context
    }
}
user.welcomeMessage();
user.username = "sher";
user.welcomeMessage();

console.log(this);             //in node env, "this" refers to empty {} and in browser, "this" refers to window object

function one(){
    let username = "cheetah";
    console.log(this);           //gives a whole lot of information
    console.log(this.username);     //undefined, this works differently in object and functions
}
one();

const secondFunction = function(){
    const username = "mor";
    console.log(this.username);          //undefined
}
secondFunction();

//Arrow functions
const thirdFunction = () => {
    const username = "billa";
    console.log(this.username);            //undefined
    console.log(this);              //gives empty parenthesis {}
}
thirdFunction();

//arrow function to add two numbers
const addTwo = (num1 , num2) => {
    return num1 + num2;
}
console.log(addTwo(5, 6));

//arrow function implicit return
const add = (num1, num2) => (num1 + num2);
console.log(add(5,6));

const objectInArrowFunction = () => ({username:"raja dhi raj"})
console.log(objectInArrowFunction());

const arrayInArrowFunction = () => ([1,2,3,4])
console.log(arrayInArrowFunction());