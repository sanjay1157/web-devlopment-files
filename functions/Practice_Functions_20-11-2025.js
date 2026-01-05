// scope

// var is an function scope.
// let and const are block scope.
// var can be acessed out side the function.
// let & const cannot be acessed out side the block. 

// var c = "green"

function fruits (){  // if we declare variable in parameters not in arguments then it will not check outside the function

    var a = 1
    let b = 23
    const c = 4
    // console.log(a,b,c)
    console.log(a)
    console.log(b)
     console.log(c)
}

// fruits(a,b,c)   // after the function we call again that variable var const and let does not give output it will throw an error

fruits()
// console.log(a)
// console.log(b) 
// console.log(fruits())  // undefined


    // // console.log(a)
    // // fruits(3,9)
    // // fruits(7,8,c)
    // fruits (a,b,c)
    //  console.log(a)

    //block

    function sports(){
        {
        var cricket = "dhoni"
        let ipl = " raina"
        const volley = "sunny"
        console.log(cricket)
        console.log(ipl)
        console.log(volley)
        console.log(cricket,ipl,volley)
    }
    }
sports()

//  console.log(cricket)
//         console.log(ipl)
//         console.log(volley)

// recursiuve function 
// a function calling itself called recursive function

let sum = 0
let one = function rec(z){

    if (z==0){
         
        return 0
    }
    sum += z
     return sum + rec(z-1)

}

//one(10)// not getting error but output is not visible

console.log(one(10))  // giving outpt

// sum of first ten numbers


let num = 0

let two = function ren(y){

    if (y!=0){
        return 0

    }
    num +=y
    return num + ren(y-1)
}

console.log(two(10))

function factorial(n) {
    if (n === 0) return 1   
    return n * factorial(n - 1)
}

// (5)*(5-1)*(3)*(2)*(1)// after reaching 0 we get 1

console.log(factorial(5))

function countdown(n) {
    if (n >= 10) {
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n + 1); 
}

countdown(5);

function trip (u) {
    if(u<=10){
        console.log("completed!")
        return; 
    }
    console.log(u)
    trip(u-1)
}

trip(20)
