//priority of parameters and arguments

  function show(a, b, ...rest) {
    console.log(a, b, rest);
}

show (1,2,3,4,5)
a = 1 //(high priority)
 b = 2 //(high priority)
  rest = [3, 4, 5] //(low priority)

  function tue (u=0, v=null){
    console.log(u,v)
}
tue(5,undefined)

function varying(t,u,v,...o){
    console.log(t,u,v,w)
    console.log(arguments)
    console.log(o)
}
varying(1,2,3,4,5,6,7,8,9)

function sum (e=10,f=null){
    console.log(e,f)
}
sum(1,undefined)

//function expression

//named function // syntax

// function functionname(){
//     console.log()
// }
// functionname()//calling function

//anonomous function // syntax

// let a = function(){

// }
// a()

// arrow function //syntax // also called as short hand operation

// let b = ( )=>{

// }
// b()
// // we can also use like this arrow function

// let c =( )=> q+r 

//                    var          // let           //const

// redeclare           yes           no               no    (declaring the same variable)

// reassignment        yes           yes              no     (reassign the values to same variable)

// intilization        yes           yes              no      (we need to pass the values to variable)

// hoisting            yes           no               no       (checks the default values in var let cost) 







//var
var y = 99 
console.log(y)

y = 98
console.log(y)
// reassignment to var 
y = "srings are reassignment to same variable lets check it"
console.log(y)
//let
let z = 100
console.log(z)

z = 101  //reassignment
console.log(z)

z = "Strings are reassignment to same variable lets check it"
console.log(z)

// let z = 101  // in let we cant redeclare same varible to another value 
// console.log(z)

//const
const h = 345
console.log(h)

// h=798 // const is not supported to reassignment
// console.log(h)

// const h = 342 // const also cant redeclare the variable
// console.log(h)

// intilization
var i // if we didnt give value to variable it doesnot give any error

let p   // same as var at intilization

 const s = 10 // definetly we need to give value to variable.

 //hoisting

//  cream();
 let cream = function() {
    console.log("Hello from an anonymous function!");
};

cream();

//console.log(d)
let d = 67      // let does not give any default value // let and const store values at script level thy did not store at global level
console.log(d)

console.log(w)  // in the var javascript engine default give value to variable like undefined
var w = 76      // var store the variable at global level that why var provide default value like undefined
console.log(w)

// console.log(a_)
const a_ = 89
console.log(a_) // this variable saved in script level.

// tea(9,8)
let tea = (o,p) =>{

    console.log(o*p) 

 }
  tea(9,8)

  
// cup(7,8)
var cup = function (e,j){
    console.log(e,j)
}
cup(7,8)

dog(9,8)
function dog(m,n){
    console.log(m*n)
}
dog(9,6)

//
const cap = function(u,v){
    console.log(u*v)

}
cap(6,4)

// scope // three types 

// Global
//function
//block

//global scope // we declare variable outside function we call the variable inside the function we get the out put

var apple = "red"
let orange = "yellow"
let banana = "green"

function fruits(){

    console.log(apple)
    console.log(orange)
    console.log(banana)
}

fruits()



//function sccope // the variable we declare inside the function we cannot console it out side the function. 

function value (){  //we need to call the variables inside the functions only in function scope.
    let x = 100;
    var Y = 200;     // var can declare outside the function it dont give any error.
    const z = 300; 
    // console.log(x)
    // console.log(y)
    // console.log(z)
}

    //console.log(x)
    //console.log(y)
    //console.log(z)
value()

//console.log(Y)   // var is an function va

//block scope

function sports(){

    if ( 10<20){        // we declare variable in that block we need to call that variable inside the block only 
        var volley = "sunnny"  // var can declare inside the block or inside the function after the block.
        let cricket = "msd"  // otherwise they dont give output in console . let & const
        const ipl = "raina"
        console.log(cricket)
        console.log(ipl)
        console.log(volley)
    }
     
    //console.log(cricket)
    //console.log(ipl)
     console.log(volley)

}

sports()