//singleton: when objects are created using constructors

//object literals
//creation
const mySym = Symbol('key1');
const jsUser = {
    name: "John",
    [mySym]: "mykey1",                    //to give symbols as key we need to use square brackets
    age: 19,
    location: "India",
    email: "john@example.com",
    isLoggedIn: false,
    LastLogInDays: ['Monday','Saturday']
}
//accessing
console.log(jsUser.email);
console.log(jsUser['email']);        //since the passed key is by default string type, we use it as string in square box
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

//updating
jsUser.email = "john.doe@example.com";
console.log(jsUser);
//Object.freeze(jsUser);                  //prevents the object from being modified
jsUser.email = "johndoe@example.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User!!!");
}
console.log(jsUser.greeting);         //returns a function reference
console.log(jsUser.greeting());       //runs the function and returns Hello JS User!!! , undefined

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);     //string interpolation, "this" refers to the current object
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


//object declaration using constructors(singleton objects)
const User = new Object()
User.id = "123abc"
User.name = "Jane"
User.IsLoggedIn = false
console.log(User);

const regularUser = {
    email: "regularUser@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jane",
            lastname: "Doe"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {obj1,obj2};           //combines obj1 and obj2 as objects inside obj3, not favourable as the result is nested objects
console.log(obj3)
const obj4 = Object.assign({},obj1,obj2);    //first parameter is the target object, rest are source objects
console.log(obj4);
const obj5 = {...obj1,...obj2}         //spread operator
console.log(obj5);

const users = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Jane"
    },
    {
        id: 3,
        name: "Joe"
    }
]
console.log(users[1].name);          //accessing array of objects

//methods
console.log(Object.keys(User));      //returns an array of all the keys of the object
console.log(Object.values(User));    //returns an array of all the values of the object
console.log(Object.entries(User));   //returns an array of all the key-value pairs of the object
console.log(User.hasOwnProperty('IsLoggedIn'));   //checks if the object has the specified property


//object destructuring
const course = {
    coursename: "JS",
    price: 999,
    courseInstructor: "Hitesh"
}
const{courseInstructor:instructor} = course;
console.log(instructor);

//API
/*
json structure
{
"name":"Hitesh",
"coursename":"JS",
"price":"free"
}
all the keys are string in json

API can also be array type
*/