/*
 #  {} -> creates a global execution context
    "this" refers to this global execution context
    Types of Execution contexts in js:
    -Global execution context
    -Function execution context
    -Eval execution context

 #  Phases:
    -Memory creation phase
    -Execution phase
*/

let val1 = 20
let val2 = 5
function addNum(num1, num2){
    return num1 + num2;
}
let result1 = addNum(val1, val2)
let result2 = addNum(28,57);

/*
Execution of the above code:
    1)Global Execution:
        "this", refers to the code
    2)Memory creation phase:
        val1 -> undefined
        val2 -> undefined
        addNum -> definition 
        result1 -> undefined
        result2 -> undefined
    3)Execution phase:
        val1 -> 20
        val2 -> 5
        addNum -> creates a new executional block that contains new variable environment and a new execution thread as follows:
            i)Memory phase:
                val1 -> undefined
                val2 -> undefined
            ii)Execution phase:
                num1 -> 20
                num2 -> 5
                returns num1 + num2 to global context
        after these steps are completed, the newly made execution block gets deleted
        addNum -> follows the same steps as above
*/

//Call Stack//
//based on LIFO//