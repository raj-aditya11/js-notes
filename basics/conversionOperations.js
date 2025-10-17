let score = undefined
console.log(typeof score);
console.log(typeof(score));       //both typeof score and typeof(score) are same

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


/*
Upon conversion:-
"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


/*
1 => true
0 => false
"" => false
"abc" => true
*/


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

    
// ****************** Operations *******************
console.log("2" + 2);         // Output: "22"
console.log(2 + "2");         // Output: "22"
console.log("2" + 2 + 2);     // Output: "222"
console.log(2 + 2 + "2");     // Output: "42"
console.log(+true);           // Output: 1
console.log(+false);          // Output: 0
console.log(+"");             // Output: 0
console.log("2" > 1);         // Output: true
console.log("02" > 1);        // Output: true
console.log(null > 0);        // Output: false
console.log(null == 0);       // Output: false
console.log(null >= 0);       // Output: true
console.log(undefined > 0);   // Output: false
console.log(undefined == 0);  // Output: false
console.log(undefined >= 0);  // Output: false
