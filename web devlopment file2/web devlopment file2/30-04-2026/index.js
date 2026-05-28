//events 
//normal events
//throttling
//debouncing
//call back functions

//normal event
//a normal event usually means a standard DOM 
//event—something that happens in the browser and that JavaScript can respond to.

let button = document.getElementById("btn")
console.log(button)

let a = 0
function action (){
    a += 1
    console.log("value of a",a)
    console.log("button clicked")
}
button.addEventListener("click" , action )

//throttling

let b = 0 
let c = 0 

button.addEventListener("click" , function (){
    let d = Date.now()
    if (d - b > 5000){
        c += 1
        console.log("value of b",b)
        b=d
    }
    console.log("button touched")
} )

//debouncing
let e = 0
let f 
button.addEventListener("click",function(){
    clearTimeout(f);
    f = setTimeout(()=> {
        e += 1
        console.log("value of e",e)
    }, 2000)

})

let v = 0
let u 

button.addEventListener("click" , function (){

    clearTimeout(u)
    setTimeout(() => {
        
        v+=1
        console.log(v)
    }, 3000 );
})

//call back functions

//A callback function is a function that runs after another function finishes its work.

function put (w) {

    console.log(w)
}

function pet (a,b,c) {

    console.log("hi team good afternoon")
    c(a+b);
}

pet (78,98,put)

//promises
//resolve & reject

let p = new Promise ((resolve , reject) => {

    let status = false
    if (status){

        //console.log("resolved")
        resolve ("function successful")
    }
    else {

        //console.log("reject")
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