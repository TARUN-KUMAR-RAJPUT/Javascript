
// function Student(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// }

// Student.prototype.getFullName = function(){
//     return this.firstName + " "+ this.lastName
// }

// var studObj = new Student("Scott", "Desatnick")
// console.log(studObj)

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        this.sayHelloAgain()
        return this.firstName + " "+ this.lastName
    }

    sayHello = () => {
        return "Hello everybody, welcome to ES6 classes"
    }

    sayHelloAgain(){
        this.sayHello()
        this.firstName = "Great Scott"
    }
}

var studObj = new Student("Scott", "Desatnick")
console.log(studObj)
console.log(studObj.getFullName())
console.log(studObj.sayHello())



