const score = 400

const balance = new Number(400)            //dynamically allocates a string type value to the number object
console.log(balance);                      //[Number: 400]
console.log(score);

console.log(balance.toString());
console.log(typeof balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));               //adds decimal upto 2 places

const otherNumber = 23.456
console.log(otherNumber.toPrecision(3));    //rounds off the number to 3 significant digits

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// _________________________________________________________________________________________________________//
//Maths
console.log(Math);                   //returns an object with various math functions and constants
console.log(Math.abs(-4));           //converts the passed argurment to positive integer
console.log(Math.round(4.6));        //rounds off the passed number to the nearest integer
console.log(Math.ceil(4.2));         //returns the smallest integer greater than or equal to the passed number
console.log(Math.floor(4.9));        //returns the largest integer less than or equal to the passed number
console.log(Math.min(4, 5, 6, 7, 8)); //returns the smallest number from the passed arguments
console.log(Math.max(4, 5, 6, 7, 8)); //returns the largest number from the passed arguments



// console.log(Math.random());          //returns a random number between 0 and 1
console.log((Math.random()*10) + 1);   //returns a random number between 1 and 10
console.log(Math.floor(Math.random()*10) + 1); //returns a random integer between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));         //returns a random integer between min and max

