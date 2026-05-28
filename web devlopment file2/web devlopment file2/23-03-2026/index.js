let a = new Promise ((resolve , reject) => {

    setTimeout (() =>{

        resolve("hello")
    } , 2000)
})

let b = new Promise((resolve, reject) => {
    
    setTimeout (() => {

        // resolve("promise2")
        reject("team")
    } , 2000)
})

Promise.all([a , b])

// Waits for both a and b to finish

.then(value => console.log("fine"))
.catch(error => console.log("not fine"))

Promise.any([a, b])

// Waits for the first successful promise

.then(success => console.log("success"))
.catch(failure => console.log("failure"))

Promise.race ([a, b])

// Returns the result of the first promise that finishes

.then (sucess => console.log("good"))
.catch (failed => console.log("bad"))

//  Method        Success Condition      Failure Condition 

// Promise.all   All promises succeed   Any one fails     
// Promise.any   At least one succeeds  All fail          
// Promise.race  First one succeeds     First one fails   

// Async & Await

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

let number2 = [1,2,3,4]

let x = number2[Symbol.iterator]()

console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
 

function* sum () {

  yield "hi"
  yield "team"
  yield "good"
  yield "morning"
}

let sim = sum()

console.log(sim.next())
console.log(sim.next())
console.log(sim.next())
console.log(sim.next())
console.log(sim.next())