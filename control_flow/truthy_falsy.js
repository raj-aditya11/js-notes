//FALSY VALUES
//false, 0 , -0, bigint 0n, "", null, undefined, NaN
//all values except falsy are TRUTHY VALUES
//TRUTHY VALUES
//"0","false", " ", [], {}, function(){}

const arr = [];
if(arr.length === 0){
    console.log("empty array");
}

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("empty object")
}

//nullish coalescing operator (??) : null undefined
let val1;
//val1 = 5 ?? 10;          //assigns 5(first appearance to val1)
//val1 = null ?? 10;         //assigns 10 neglecting the null in first place
//val1 = undefined ?? 18;     //assigns 18 neglectind the undefined in first place
val1 = null ?? 19 ?? 58;      //assigns 19 neglectind null and because of first appearance
console.log(val1);

//Ternary Operator ? :
// condition ? true : false
const price = 199;
price <= 200 ? console.log("less than 200") : console.log("greater than 200")