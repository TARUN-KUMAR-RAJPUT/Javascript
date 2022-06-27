class Shape {

    constructor(){
        console.log(`this is Shape's constructor`)
    }

    draw(){
        return "I am generic shape"
    }
}

class Circle extends Shape {
    constructor(){
        console.log(`this is Circle's constructor`)
        super()
    }
    draw(){
        return "I am a Circle"
    }
}

class Square extends Circle {
    constructor(){
        console.log(`this is Sqaure's constructor`)
        super()
    }
    draw(){
        return "I am a Circle"
    }
}

// let circleObj = new Circle()
// console.log(circleObj)
// console.log(circleObj.draw())

let sqaureObj = new Square()
console.log(sqaureObj)