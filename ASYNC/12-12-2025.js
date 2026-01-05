//Asynchronous

//In JavaScript, asynchronous behavior allows code to run without blocking the execution of other tasks. 
// Instead of waiting for slow operations—like network requests,
 //file reads, or timers—JavaScript can continue running other code and handle the result later.

console.log("boy")
console.log("girl")
console.log("twin")

//set time out
//run the line of code after given time in the line of code
//we mention time here in the form of milli seconds 
//1second = 1000milliseconds
//after execution of all line of code in javascript at the end settime and time intervals of code will 
//execute in the output  because of asynchronous

//syntax
setTimeout(()=>{

})

console.log("men")

setTimeout(()=>{

    console.log("women")  //it will print output after one second
},1000)

console.log("them")

setTimeout(() => {
  console.log("Done!");
}, 1000);

console.log("This prints first");

//you can also check here these lines of code is after set time out but
//it will exceute before this code due to asynchronous.

  for (i=0;i<100;i++) {

    console.log(i)
  } 

  let sum = 0 

  for (i=0;i<50;i++){
    sum += i 
  }

  console.log(sum)

  //setInterval
  // used to run a piece of code repeatedly at a fixed time interval
  //syntax
setInterval(()=>{

},)

let a = setInterval(()=>{

    console.log("then")
},5000)

//clear interval
//used to stop a running interval that was created with

setTimeout(()=>{
    clearInterval(a)
},20000)

