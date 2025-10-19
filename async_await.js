//JS(default) is SYNCHRONOUS and SINGLE THREADED
//EXECUTIOIN CONTEXT:- executes one statement at a time, each operation waits for the last one to complete before executing

/* BLOCKING CODE V/S NON BLOCKING CODE
    -blocking code blocks the flow of program, while non blocking code does not block the execution
    -blocking code: read file sync while non blocking code: read file async
*/ 

/*EVENT LOOP
    1) JS Engine
        -memory heap
        -call stack
    2)Web API
        -DOM API
        -set timeout -> register call back -> task queue -> add to call stack
        -set interval
        -fetch() -> promise -> prioritized task queue -> high priority -> add to call stack
*/