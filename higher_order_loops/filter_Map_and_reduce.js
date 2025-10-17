const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach((item)=>{
    return item;
})
console.log(values)            //undefined

//filter 
const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.filter((num)=> (num > 4))               //filter returns the filtered out values to the variable assigned, in this case to newNum
//NOTE: while using curly braces we have to use the return keyword in order to return something 
console.log(newNum);

const newestNum = [];
myNum.forEach((num)=>{
    if(num > 4){
        newestNum.push(num)
    }
});
console.log(newNum)

const books = [
    {
        title: 'Book One', genre: 'Fiction' , publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction' , publish: 1992, edition: 2008
    },
    {
        title: 'Book Three', genre: 'History' , publish: 1999, edition: 2007
    },
    {
        title: 'Book Four', genre: 'Non-Fiction' , publish: 1989, edition: 2010
    },
    {
        title: 'Book Five', genre: 'Science' , publish: 2009, edition: 2014
    },
    {
        title: 'Book Six', genre: 'Fiction' , publish: 1987, edition: 2010
    },
    {
        title: 'Book Seven', genre: 'History' , publish: 1986, edition: 1996
    },
    {
        title: 'Book Eight', genre: 'Science' , publish: 2011, edition: 2016
    },
    {
        title: 'Book Nine' , genre: 'Non-Fiction' , publish: 1981, edition: 1989
    }
]
const userBooksGenre = books.filter((bk)=> (bk.genre === "History"))
const userBooksYear = books.filter((bk)=> bk.publish > 2010)
const userBooksYearGenre = books.filter((bk)=> (bk.publish > 1995 && bk.genre === "Science"))
console.log(userBooksGenre)
console.log(userBooksYear)
console.log(userBooksYearGenre)

//map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num)=>(num*10));
console.log(newNums)

//chaining
const newestNums = myNumbers.map((num)=>(num*10)).map((num)=>(num + 1)).filter((num)=>(num>=40))
console.log(newestNums)

//REDUCE METHOD
const newest = [1,2,3]
const total = newest.reduce(function(acc,currval){
    console.log(`acc is ${acc} and currval is ${currval}`)
    return acc + currval;
},0)
console.log(total)

const myTotal = newest.reduce((acc,curr)=>(acc + curr),0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "JS course",
        price: 999
    },
    {
        itemName: "DSA course",
        price: 1199
    },
    {
        itemName: "Python course",
        price: 799
    },
    {
        itemName: "Mobile dev course",
        price: 1299
    }
]

const cartTotal = shoppingCart.reduce((acc,item)=>(acc + item.price),0)
console.log(cartTotal)