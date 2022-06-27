// var employee = {
//     id:1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet()

// use Settimeout

// var employee = {
//     id:1,
//     greet: function(){
//        setTimeout(function(){
//         console.log(this.id)
//        }, 2000)
//     }
// }

// employee.greet()

// using self variable 

// var employee = {
//     id:1,
//     greet: function(){
//         var self = this
//        setTimeout(function(){
//         console.log(self.id)
//        }, 2000)
//     }
// }

// employee.greet()

// using bind method

// var employee = {
//     id:1,
//     greet: function(){
//        setTimeout(function(){
//         console.log(this.id)
//        }.bind(this), 2000)
//     }
// }

// employee.greet()

// var employee = {
//     id:1,
//     greet: function(){
//        setTimeout(() =>{
//         console.log(this.id)
//        }, 2000)
//     }
// }

// employee.greet()

// var obj = {
//     fname: "Scott",
//     getName: function(){
//         console.log(this)
//         this.fname = "Desatnick"
//         console.log(this)

//         var updateName = () =>{
//             this.fname = "Great Scott"
//             console.log(this)

//             var againUpdate = () => {
//                 this.fname ="Scott"
//                 console.log(this)
//             }
    
//             againUpdate()
//         }
//         // var getData = updateName.bind(this)
//         // getData()
//         // updateName.call(this)
//         updateName()


//     }
// }

// obj.getName()

var employee = {
    id:1,
    greet: function(){
       setTimeout(function(){
        console.log(this.id)
       }.bind(this), 2000)
    }
}

employee.greet()

/*
   !  You cannot use bind to change the value of 
   !  this inside an arrow function. 
*/
var employee = {
    id:1,
    greet: function(){
       setTimeout(() =>{
        console.log(this.id)
      // }.bind(this), 2000) // 
        }, 2000) // 
    }
}

employee.greet()