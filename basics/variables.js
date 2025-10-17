const accountId = 123456;                  //const variable's values cannot be changed
let accountEmail = "aadi@gmail.com";       //let and var are used to declare variables whose values can be changed
var accountPassword = "057926";            //prefer not to use var because of issue in block scope and functional scope
accountCity = "Delhi";  
let accountState;                          //undefined until a value is assigned

//accountId = 234567;                  //this will throw an error as const variable's values cannot be changed
accountEmail = "raj@gmail.com";
accountPassword = "784564";
accountCity = "Mumbai";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); //gives the output in tabular format
