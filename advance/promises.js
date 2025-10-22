//promise is an object representing eventual completion or failure of an asychronous operation

//promise creation
const promiseOne = new Promise(function(resolve, reject){    //promise takes a callback function
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();                                 //this links resolve to the consumption function
    }, 1000)
})   

//promise consuption
promiseOne.then(function(){                          //.then()-> takes resolve, .catch()-> takes reject(error)
    console.log("Promise consumed");
})

//----------------------------------------------------------------------------------------------------------------------//

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//----------------------------------------------------------------------------------------------------------------------//

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "John", email: "john@doe.com"})                   //generally we pass objects to resolve 
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

//----------------------------------------------------------------------------------------------------------------------//

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Jane Doe", password: "1234"});
        }else{
            reject("ERROR: Something went wrong");
        }
    }, 1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {    //chaining of then functions, second then recieves the return statement passed from first then 
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {             //.finally() is executed every time doesn't matter if the promise is resolved or rejected
    console.log("promise is either resolved or rejected");
})

//----------------------------------------------------------------------------------------------------------------------//

//async and await
//async await cannot handle errors directly, we need to use try catch in order to deal with errors
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "1234"});
        }else{
            reject("Error: js went wrong");
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();


async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers();


fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
})

//fetch
/*
1)Data:
    reserves memory in space
    has two arrays:
        -on fulfilled[](resolve)      
        -on rejection[](reject)      //we cannot append to any of these

    web browser/node
        gives a network request
            -if there is any response then it goes to resolve(even errors like 404)
            -else it goes to reject
*/