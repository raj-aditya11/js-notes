//Dates

let mydate = new Date()
console.log(mydate.toString());                
console.log(mydate.toDateString());    
console.log(mydate.toISOString());              
console.log(mydate.toLocaleString());        
console.log(mydate.toLocaleTimeString());       
console.log(mydate.toTimeString());             
console.log(mydate.toUTCString());
console.log(typeof mydate);                          //date is an object

let myCreatedDate = new Date(2025, 9, 9);            //months start from 0(January) in js and go till 11(December)
console.log(myCreatedDate.toDateString());

let newDate = new Date(2025, 9, 9, 20, 58);
console.log(newDate.toLocaleString());

let dateOne = new Date("10-9-2025");                 //sets time to 12:00 am by default
console.log(dateOne.toLocaleString());

let myTimeStamp = Date.now()                      //gives time in milliseconds
console.log(myTimeStamp);
console.log(dateOne.getTime());

console.log(Math.floor(Date.now()/1000));             //to convert milliseconds to seconds

let newDate1 =  new Date();
console.log(newDate1.getMonth() + 1);              //to give the exact month as in js months start from 0 and not 1
console.log(newDate1.getDay());                    //gives the day of the week (0-6) where 0 is Sunday and 6 is Saturday

newDate1.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate1.toLocaleString());