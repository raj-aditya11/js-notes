//for each loop
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function(item){
    console.log(item)
})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

coding.forEach((item,index,arr)=>{              //for each can access the item, it's index and even the whole array
    console.log(item,index,arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach((item)=>{         //since myCoging is an array of objects, item holds the objects as a whole
    console.log(`Language name is ${item.languageName} and language file name is ${item.languageFileName}`)
})