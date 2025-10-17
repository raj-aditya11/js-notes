//array
//js arrays are resizable
//js array copy operations create shallow copies(properties of copy share the same reference point)


//ARRAY CREATION
const myArr = [0,1,2,3,4,5];
console.log(myArr); 

const myHeros = ["spiderman", "ironman", "thor"];
console.log(myHeros);

const myArr1 = new Array(0,1,2,3,4,5);
console.log(myArr1);

//ARRAY METHODS
myArr.push(6);                       //appends the element passed to the array
console.log(myArr);
myArr.pop();                         //deletes the last element from the array
console.log(myArr);

myArr.unshift(9);                    //adds the element at the start of the array
console.log(myArr);
myArr.shift();                       //removes the first element from the array
console.log(myArr);

console.log(myArr.includes(9));       //checks if the element passed is present in the array or not(return boolean value)
console.log(myArr.indexOf(2));        //gives the index of the element passed, if the element is not in the array then -1

const newArr = myArr.join();          //converts the array into string
console.log(typeof newArr);
console.log(myArr);                   
console.log(newArr);

const myn1 = myArr.slice(1,3);        //returns a copy of a section of an array
console.log("A",myArr);
console.log(myn1);
const myn2 = myArr.splice(1,3);       //returns a section of an array and deletes that section from the original array
console.log("B",myArr);
console.log(myn2);

const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

marvel_heros.push(dc_heros)             //pushes the whole dc_heros array as one element and creates a nested array
console.log(marvel_heros);
//in order to access the elements of dc_heros from marvel_heros, we can use indexing like marvel_heros[3][0] for "superman"
console.log(marvel_heros[3][1]);         //give "flash"
const allHeros = marvel_heros.concat(dc_heros);         //merges the two arrays but creates a new array
console.log(allHeros);
const allNewHeros = [...marvel_heros, ...dc_heros];    //spread operator merges all the passed arrays and creates a new array
console.log(allNewHeros);

const another_array = [1,2,3,[4,5],6,7,[6,7,[8]],9];
const real_another_array = another_array.flat(Infinity);  //flattens the array into a single array up to the specified depth, here infinity means all levels
console.log(real_another_array);

console.log(Array.isArray("thor"))           //checks if the passed argument is an array or not
console.log(Array.from("thor"))              //creates an array from the passed argument
console.log(Array.from({name: "thor"}))      //in this case gives an empty array as we need to specify whether to create array from keys or values
console.log(Array.from(Object.keys({name: "thor"})))    //creates an array from the keys of the passed object
console.log(Array.from(Object.values({name: "thor"})))  //creates an array from the values of the passed object

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));        //creates a new array from the passed arguments