/*
    ? => : fat arrow
*/
 
// var add = function(a,b){
//     return a + b
// }

// var add = (a,b) => {
//     return a + b
// }

/*
    * both are same
    ? => a +b
    ? => {retrun a+ b}
*/
//var add = (a,b) => {return a + b}

var add = (a,b) => a + b

console.log(add(10,20))

let numbers = [4,2,6]

// numbers.sort(function(a,b){
//     return a-b
// })

numbers.sort((a,b) => a-b)
console.log(numbers)

/* 
    ? Single parameter
    * (name) => name.length
    *  name  => name.length
*/

let names = ["Scott", "Adam", "Tuan", "Uma"]

let lengths = names.map(name => name.length)

console.log(lengths)

// With No parameter

let logDocument = () => console.log(window.document)
logDocument()

// Line Break 

// let multiply = (x,y)     
// => x*y

let multiply = (x,y) =>  
x*y

console.log(multiply(5,4))

// Object Literal 

// let setColor = function(color){
//     return {color: color}
// }

let setColor = (color)=> ({color: color})

let backGroundColor = setColor('Green')
console.log(backGroundColor)