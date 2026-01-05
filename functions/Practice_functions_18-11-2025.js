//Functions
// Function is a piece of code that performs a specific task and return some value.
//Syntax
function result(){ //Parameters


}

result()//function calling
//Values that can be passed at the time of funtion calling called as arguments 

function sub (a,b){
    console.log(a-b)
}

sub(91,63) // arguments

function div (c,d){  //parameters

    console.log(d/c)
    return(d/c)
   
}

 console.log(div (25,675))

 function add (m,n){

    console.log(m+n)
    return "why"

 }

 let output = add (789,543)
 console.log(output)

 function fire (t,u){

    // return "modulus"

    console.log(t%u)

    return "modulus"
    
 }

 fire (170,5)

 //we can define function in 2ways

 //function declaration // also known as named function and function statement
 //function expression // named function // anonymous function // arrow function

 //function declartion
 // function functionname(){
 // }

 // functionname() // calling function

 //Named function // syntax

 function sum (x,y){  //we need to give name to this function like sum ....
    console.log(x-y)
 }

 //Anonymous function // used at when the function used as values

let sumu =  function (x,y){  // we need not to give name to this function like named function. 
    console.log(x-y)          // we need to pass the variable 
 }

 let treat = function() {
    console.log("Hello from an anonymous function!");
};

treat();


 //Arrow function

  let product = (x,y)=> {
    console.log(x-y)
 }

 let pet = (o,p) =>{

    console.log(o*p) 

 }
 pet(9,8)




//  k()
//  l()

 //function declaration

 function k (){
    console.log("k is called")
 }

 k()
 //function expression
  var l = function m (){
    console.log("m is called")
  }
  l()

  //priority 

  function show(a, b, ...rest) {
    console.log(a, b, rest);
}

show(1, 2, 3, 4, 5);
a = 1 //(high priority)
 b = 2 //(high priority)
  rest = [3, 4, 5] //(low priority)


//   function tue(u,v){
//     console.log(u,v)
//   }
// tue (1,2)

  // arguments have high priority than parameters
  // default parameter?

//   function tue(u =0,v = 10){
//     console.log(u,v)
//   }
// tue (1)

// function tue (u=0, v=null){
//     console.log(u,v)
// }
// tue(5,undefined)
 
function tue (u=10, v=10){
    console.log(u,v)
}
tue(5,undefined)

//varying

function varying(a,b,c,d){
    console.log(a,b,c,d)
}
 varying(2,3,4,5)

 function varying(q,r,s,v,w,...f){
    console.log(q,r,s,v,w)
    console.log(arguments)
    console.log(f)
 }
// rest parameter and argument object
// rest paremeter wil store the remaining arguments in it
//rest parameter will define at the last of parameter like ....f
 varying(1,2,3,4,5,6,7,8,88,99,56)