// for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    console.log(`table of ${i}`);
    for(let j = 1; j <= 10; j++){
       console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray = ['flash', 'batman', 'superman'];
for(let index = 0; index < myArray.length; index++){
    console.log(myArray[index]);
}

//break and continue

for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log("detected 5, exiting loop now....");
        break;                                           //break exits the whole loop 
    }
    console.log(`value of i is ${index}`);
}
for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log("detected 5, skipping this iteration");
        continue;                                      //continue skips the current iteration
    }
    console.log(`value of i is ${index}`);
}
