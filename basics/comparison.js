console.log("2" > 0);      //true
console.log("02" > 0);     //true      //type conversion based on ascii code

// avoid
console.log(null > 0);     //false
console.log(null == 0);    //false
console.log(null >= 0);    //true     //equality check == and comparisons > < >= <= work differently, comparison converts null to a number treating it as 0. hence (3)null >= 0 is true and (1)null > 0 is false

console.log(undefined == 0);   //false
console.log(undefined < 0);    //false
console.log(undefined > 0);    //false

// ===
console.log("2" === 2);        //false      //compares both data and data type
