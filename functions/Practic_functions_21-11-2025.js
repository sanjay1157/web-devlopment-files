// Functin Currying
//where a function that takes multiple arguments transformed into asequence of function  
//inner function will remeber the outer function data

// syntax

// function functionname(){

//     function(){
//         function(){

//             function(){

//             }
//         }
//     }
// }

function sum(a){
   return function(b){
    console.log("second function",a)
    return function(c){
   
        console.log("third function")
        return function(d){
            console.log("fourth function",a,b,c)
            return "done"
        }
    }
   }
}
var e = sum(1)(2)(3)(4)  
console.log(e)

function divison(x){
    return function(y){
        console.log(x/y)
        return function(z){
            console.log(x*z)
            return function (u){
                console.log(u-x)
                return function (v){
                    console.log(x+v)
                    return "done!"
                }
            }
        }
    }
}
var w = divison(20)(5)(4)(30)(100)
console.log(w)

// pure function 
// A pure function is a function that always produces the same output from the same input.
// pure functions cannot modify the state
//impure function
// A impure function can produce different outputs to same input.
// impure function can modify the state.

//pure function

let total = 0

function add (value){

    console.log((total+=value))
    return total;
}

add (5);

//console.log((add(5)))

//impure function

add(9)  // total is global that why external value will replace in it 

add(7)   // the next argument we give in that function will be total value.

// function getRandomNumber() {
//   return Math.floor(Math.random() * 200) + 1;
// }
 
// console.log(getRandomNumber());

// let s = Math.floor(Math.random ())* ; // we get decimal numbers
// console.log(s)
let m=Math.floor(Math.random()*(300-200+1))+200  // (maximum - minimum +1)+ minimum 
console.log(m)

let s = Math.floor(Math.random()*(100-0+1))
console.log(s)

let r = Math.floor(Math.random()*100) +1; 
console.log(r)

// we need to print nymbers in certain range we need to multiply with that range 


function the (a, b) {
  return a + b;   // Always produces the same output for the same inputs
}

console.log(the(6,7))

//First class function
//A function that can be stored in a variable and can be passed as argument and can be written from another function

// assigning function to variable

let k = function (){
    console.log("Hi team good afternoon")
}

k( )                // calling function by a variable.

//passing functions as arguments
function are(){
    console.log("i am there")
}

  function where(hg){
    hg();
} 

where(are)  

// the function are is passed as an arggument to where function and then executed inside are function.

//returning functions from function.

function outer(){
    return function inner (){
        console.log("i am inner function")
    }
}

let inner = outer()
inner()