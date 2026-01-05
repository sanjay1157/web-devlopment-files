//This keyword
//this keyword refers to the object that is currently calling or owning the function.
// this refers to current object.

// In java script the topmost object is window object

// Global
console.log(this)   // window object
//normal function
function hey (){

    console.log(this)   // window object
}

//arrow function

let ar = ()=> {
    console.log(this)   // window object
}
ar()

hey();

let sim = {
    name:"sanjay", hello (){
        console.log(this)
    }, 
    hello1 : ()=>{
        console.log(this)
        // arrow function does not have own this it will take object from parent scope or lekiscal scope.
    }
}
//console.log(sim[name]) // we need to give single or double quotes due to static keys

console.log(sim["name"])
hey()
sim.hello1()
sim.hello()

// change of this reference
//3ways 
//call,apply,bind.

function hey (){

    console.log(this)
}

hey.call(sim)

function men (a,b){

    console.log(this)
    console.log(a+b)
}

men.call(sim,34,76)

// 1st argument will be object reference
//next will be the arguments for that function.
//in call we can send "n" number of arguments.

//Apply

function sun (x,y){

    console.log(this)
    console.log(x*y)
}

sun.apply(sim,[8,7])

// in apply we cant send "n" numbers of arguments. 

//bind

function run(u,v){

    console.log(this)
    console.log(u-v)
}

run.bind(sim,97,68)()

let idea = {
    phn : "99999999999",
    hello2 (){
        console.log(this)
    },
    hey2 : (f,g) =>{
        console.log(this)
        console.log(f+g)
    }
}

idea.hello2()
idea.hey2()
console.log(idea['phn'])

let arr = (c,d)=>{
    console.log(this)
    console.log(d/c)
}

arr.call(idea,100,2000)

// arrow apply

let arr1 = (c,d)=>{
    console.log(this)
    console.log(d+c)
}

arr1.apply(idea,[456,786])

//arrow bind

let arr2 = (c,d)=>{
    console.log(this)
    console.log(d-c)
}

arr2.bind(idea,675,897)()