const name = "John Doe";
const count = 50;

//console.log(name + count + " kills");

console.log(`hello my name is ${name} and i have ${count} kills`);      // string interpolation (${})

const newName = new String("Jane-Doe");                    // gives a string type with indexing, prototypes
console.log(newName[0]);                                  //gives the first character of the string
console.log(newName.__proto__);                            //gives the prototype of the string

console.log(newName.length);                              
console.log(newName.toUpperCase());
console.log(newName.charAt(5));
console.log(newName.indexOf('D'));                      //gives the index of the first occurence of the passed character
const newString = newName.substring(0,4)
console.log(newString);
const anotherString = newName.slice(-8, 4)              //unlike substring, slice can take negative values also 
console.log(anotherString);
const newString1 = "    John    "
console.log(newString1);
console.log(newString1.trim());                           //removes the white spaces and line terminator
const url = "https://www.google.com";
console.log(url.replace("google", "youtube"));
console.log(url.includes("google"));                      //checks if the string contains the passed character or not
console.log(newName.split('-'));                          //creates an array of the string with respect to the delimiter passed(in this case '-')

