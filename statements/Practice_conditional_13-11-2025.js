//Conditional statements

// IF
//If else
//else if else
//Switch

// if // syntax

// if (condition) {}


function checkeligibility(age){

if (age>18){

    console.log("eligible to vote") 
}
}

let age = 43
checkeligibility(age)

if (true){
    console.log("truthy value")
}

if (false){
    console.log("falsevalue")
}

// we need to check the truthy values and false values. 
if(null){
    console.log("truthyvalue")
}
if(undefined){
    console.log("falsevalue")
}

//ifelse

//syntax

// if(condition) {

// }
// else{
    
// }

if(false){
     console.log("true")
  
}
else{
    console.log("false")

}

let x = 90
let y = 30

if(x<y){
    console.log("x is smallest")
}
else{
    console.log("y is smallest")

}

//if-else-if

let m = 30
let n = 20 
let o = 10

if ( (m<o) && (m<o) ) {
    
    console.log("m is smallest")
}
else if ((n<o) && (n<m)) {
    console.log("n is smallest")
}
else{
    console.log("o is smallest")
}

//Nested if-else

    let f = 20
    let g = 30
    let h = 10

    if(f<h){
        if(f<g){
        console.log("f is smallest")
    }
    }
    else{
        console.log("h is smallest")
    }

// Switch 
// Step value 1-10 , 11-20 , 21-30 , 31-40 (If else If else)
// Exact value 1, 10, 15 (Switch)    

//syntax

// switch (key){

//     case value:

//     break;

//     default:

//     break;

// }


function ranks(R){


switch (rank){
    case 10:
    console.log("Excellent")
    break;
    case 9:
        console.log("very good")
        break;
    case 8:
        console.log("good")
        break;
        case 7 :
            console.log("Average")
}
}

let rank = 8
ranks(rank)

//ternary // composed of three parts

// condition ? true case : false case

let score = 50

let grade = score >= 90? "A" : 
            score >= 80? "B" :
            score >= 70? "c" :
            score >= 60? "D" : "F";

            console.log(grade)

            
let i = 5;
let type =
    i > 10 ? "Greater than 10" :
    i > 5  ? "Greater than 5" :
    i === 5 ? "Exactly 5" :
    i > 0 ? "Positive" : "Zero or Negative";
console.log(type); 

let v = 45000;
 let rent = v >80000 ? "rent paid" : 
  v >40000 ? "half paid" : 
  v === 50000 ? "half of the rent" : "total not paid";

           console.log(rent)

           let q = 48
           let score1 = q>= 90? "a" :
                        q>= 80? "b" :
                        q>= 70? "c" :
                        q>= 60? "d" :
                        q>= 50? "e" : "fail"

                        console.log(score1)

let age2 = 17

let message = age2>= 18? "you are eligble" : "you are not eligible"

console.log(message)

function run (e) {

    switch (sum) {

        case 1:
            console.log("merit")
            break;
            case 2:
        console.log("very good")
        break;
    case 3:
        console.log("good")
        break;
        case 4:
            console.log("Average")


    }
}

let sum = 3
run (sum)

function fem (i) {

    switch (rem) {
        case 10:
            console.log("hi")
            break;
            case 20:
                console.log("hey")
                break;
                case 3:
                    console.log("bye")

    }
}

let rem = 20

fem (rem)
