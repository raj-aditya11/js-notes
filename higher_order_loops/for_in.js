//for in loop
const obj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple"
}
for(const key in obj){
    console.log(`${key} is shortcut for ${obj[key]}`)
}

const programming = ["js", "rb", "py","java", "cpp"]
for(const key in programming){
    console.log(key)             //gives the keys of the array i.e. the indexes
}
for(const key in programming){
    console.log(programming[key]);           //gives the value at the corresponding key(index)
}

//for in cannot be used on map as maps are not iterable