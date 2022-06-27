/*
    ? Spread operator (...) - unpacks elements of an array 
    ? Rest operator (...) - packs elements into an array
*/

// Spread operator 
const odd = [1,3,5]
const combined = [2,4,6, ...odd]

console.log(combined)

// Rest Operator 

function display(a,b,c, ...params){
    console.log(params)
}

display(1,2,3,4,5,6)

// Constructing array literals 

let initialChars = [ 'A', 'B']
let chars = [...initialChars, 'C', 'D']

console.log(chars)

// Concatenate two arrays

let numbers =[1,2]
let moreNunbers =[3,4]
let allNumbers = [...numbers, ...moreNunbers]
console.log(allNumbers)

// Copying an array

let scores = [80, 90, 70]
let copiedScores = [...scores]
console.log(copiedScores)

// spread operator and string

let charsOne = ['A', ...'BCDE', 'F']
console.log(charsOne)


let student = {
    name: "Scott",
    city: "Boston"
}

let studentsInfo = {
    ...student,
    subject: "Agile"
}

console.log(studentsInfo)