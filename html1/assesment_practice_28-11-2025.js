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

// let count2 = 0 

// function tet(g){

//     for(i=0;i<=g.length;i++){
//         if(g[i]=='a' || g[i]=='e' || g[i]=='i' || g[i]=='o' || g[i]=='u'){
//             count2++
//         }
//     }
//     console.log(count2)
// }
// tet("srinivasu")

let max3=0

function minimum (c){
    for (i=0; i<=c.length-1;i++){

        if (c[i]>max3){
            max3=c[i]

                 
            
        } 
        }

         return max3
}

console.log(minimum([3,4,5,6,7,88,22,33,95]))

//table

function table8(m_n){

    for (let i = 0 ; i<=10; i++){

        console.log(m_n+ 'x' +i +"="+(m_n*i))
    }
}

table8(9)

line6 = ""

function ten(u_t){

    for(let i = u_t.length-1; i>=0; i--){
        line6 += u_t[i]
    }
    console.log(line6)
}

ten("jeevan")

// let count6= 0

// function yet(t_y){

//     for (let i = 0; i=t_y.length-1; i++){

//         if(t_y[i]=='a' ||t_y[i]=='e'  || t_y[i]=='i' ||t_y[i]=='o' || t_y[i] =='u'){

//             count6++
//         }
//     }
//     console.log(count6)
   
// }

// yet("sanajy kumar naidu")

// let count7 = 0

// function tej(R){

//     for (i=0;i=R.length;i++){

//         if(R[i]=='a' || R[i]=='e' || R[i]=='i' || R[i]=='o' || R[i]=='u'){

//             count7++
//         }
//     }

//     console.log(count7)
// }

// tej("prasad raju")

let count2 = 0 

function tet(g){

    for(i=0;i<=g.length;i++){
        if(g[i]=='a' || g[i]=='e' || g[i]=='i' || g[i]=='o' || g[i]=='u'){
            count2++
        }
    }
    console.log(count2)
}
tet("srinivasu")

let count9 = 0

function pet(w){

    for(i=0;i<=w.length;i++){
        if(w[i]=='a' || w[i]=='e' || w[i]=='i' || w[i]=='o' || w[i]=='u'){

            count9++
        }
    }

    console.log(count9)
}
pet("damodar rao")

let max5 = 0

function den(v){

    for(i=0;i<=v.length-1;i++){
       if (v[i] > max5){
        max5=v[i]
       }
    }
    return max5
}

console.log(den([1,,2,3,4,5,6,7,8,9]))

let sum7= 0

function ket(j){
    for(i=0;i<=j.length-1;i++){

        sum7+=j[i]
    }

    console.log(sum7)
}

ket([23,45,67,89,98,7,654,32])

let max8= 0 

function toe (p){

    for(i=0;i<=p.length-1;i++){

        if(p[i]>max8){
            max8=p[i]
        }
    }
    return max8
}

console.log (toe([21,23,45,65,76,89,96]))

let k = [3,49,9,28,34,4,4,42,"hello hai sunny",null,undefined,"are you happy",5,6,7,88,9,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,23,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5]
var output1 = k.length;
console.log(k)

//adding first element at array by using splice

//To add an element to the beginning of an array using splice() in JavaScript, you insert at index 0.


k.splice(0,0,1)
console.log(k)

arr.splice(0,0,77)
console.log(arr)

//adding last element to array by using splice
//you insert at the index equal to the array’s length.

var output = arr.length
console.log(arr)

arr.splice(5,0,32)
console.log(arr)

k.splice(52,0,98)
console.log(k)
