//Array Destructuring

let array = ["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = array

console.log(name1) // array[0]
console.log(name2) // array[1]
console.log(name3) // array[2]

// Split

let [fname, lName] = "Scott Desatnick".split(" ")
console.log(fname)
console.log(lName)

let [firstName, ,title1] = ["Scott","Desatnick", "Great Boss"]

console.log(firstName)
//console.log(lastName)
console.log(title1)

// Object Destructuring

let user = {
    name: "Scott",
    age: 46
}

let {name, age} = user
console.log(name)
console.log(age)

let options = {
    title: "Menu",
    width: 100,
    height: 200
}

let {title, width, height} = options

console.log(title)
console.log(width)
console.log(height)