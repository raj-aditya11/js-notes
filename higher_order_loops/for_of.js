//for of

const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

const greetings = "Hello World!";
for(const greet of greetings){
    if(greet == " "){
        console.log("space...");
        continue;
    }
    console.log(`each character is ${greet}`)
}

//maps
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')      //is not added as it already exists in the map
console.log(map)

//map is known for storing unique values only
//syntax of for of loop on map to access both the keys and values separately
for(const [key, value] of map){              
    console.log(`${key} :- ${value}`)
}

//for of does not work on objects, they are not iterable using for of loops