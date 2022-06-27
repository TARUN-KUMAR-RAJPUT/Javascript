// function say(message){
//     console.log(message)
// }

// say()

// ES5

function say(message){
    message = typeof message !== 'undefined' ? message: "Hi"
    console.log(message)
}

say()
say('Hello')

// ES6

function say(message='Hi', name="Scott"){
    console.log(message, name)
}

say()
say('Hello', "Desatnick")
say("Desatnick")