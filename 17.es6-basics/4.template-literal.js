let message ="Welcome to ES6, here \n" +
"you would learn \n" +
"basics of ES6"

console.log(message)

/*
    ?  Re-write using back tick 
    * Avoid /n s to include line breaks
    * Avoids the concatenation
*/

let messageOne =`Welcome to ES6, here 
you would learn 
basics of ES6`

console.log(messageOne)

/*
    ? Substitutions
*/

// es5 substitutions
console.log("id: %i, fName: %s, lName:%s", 1, "Scott", "Desatnick")

let firstName ="Scott",
    lastname ="Desatnick"

let greeting = `Hello Mr.${firstName} ${lastname}`

console.log(greeting)