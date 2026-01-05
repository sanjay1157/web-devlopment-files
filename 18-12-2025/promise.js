//promises
//resolve & reject

let p = new Promise ((resolve , reject) => {

    let status = false
    if (status){

        resolve ("function successful")
    }
    else{
        reject ("error")
    }
})

p
.then ((a) =>{

    console.log(a)
})

.catch ((b) => {

    console.log(b)
})

//promise.all
//promise.any
//promise.race

// let ab = Promise.resolve("completed")
// let ba = Promise.reject("failed")

// Promise.all ([ab , ba])
// .then

//promise.all
//here if one promise will reject in output we get error message only
//otherwise all prosimes are resolve then we get resolve message in output


let c = new Promise ((resolve , reject) => {

    setTimeout (() =>{

        resolve("promise1")
    } , 2000)
})

let d = new Promise((resolve, reject) => {
    
    setTimeout (() => {

        // resolve("promise2")
        reject("promise2")
    } , 2000)
})

Promise.all([c , d])

.then(value => console.log("value"))
.catch(error => console.log("error"))

//promise.any
//here we can see if any one resolve is there then we get resolve output message

Promise.any([c , d])

.then(success => console.log("success"))
.catch(failure => console.log("failure"))

//promise.race
// here output will come on the base of time we passed to the input
//race means which output will get the first in the output based on time

Promise.race ([c, d])

.then (sucess => console.log("sucess"))
.catch (failed => console.log("failed"))

// Async & Await

//async lets you write asynchronous code, and await lets you wait
//  for the result in a simple, readable way.

//async syntax

// aync function () {
// await function ()}

function sum (){
     return new Promise ((resolve , reject)=> {

        setTimeout(()=>{

            
            resolve ("done")

        } , 2000)
     })
}

async function hai (){

    return await sum()
    console.log("hello")

    
}

let s = hai()
console.log(s)

