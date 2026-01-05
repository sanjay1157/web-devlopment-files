//var a= 7
//var abc= "10"
//console.log(a)
//console.log(abc)
//var name= "sanjay kumar"
//var bool= true
//var k
//var m= null
//console.log(name)
//console.log(bool)
//console.log(k)
//console.log(m)
//console.log(typeof(name))
//console.log(typeof(a))
//console.log(typeof(bool))
//console.log(typeof(abc))

//Data types:
//Primitive data types.
//non primitive or reference data types.

//Primitive data types 
//String "",'',``.
//Boolean
//Number
//Null
//Undefined
//Big int
//Symbol

//string//typeof

var string= "Hello team good afternoon"
var k = 'Hello team good afternoon'
var m = `Hello team good afternoon`
console.log(String,typeof(String))
console.log(k,typeof(k))
console.log(m,typeof(m))

//number

//Rules for writing the variable names
//--> It should strat with charcter (alphabet)
//--> It should not start with number.
//--> It shou;d not contain white space.
//--> a key word cannot be used as a variable name.

//errors
//syntax error
//reference error
//= 'assignment opertaor it assign right side value to the left'

var  _c= '70'

console.log("value of _c",_c,typeof(_c))

var sunnytony = string
console.log(sunnytony)

var d = 78
console.log(d,typeof(d))

//Boolean

var a = true
var b =false

console.log(a)
console.log(b)

// we nned to define the true and false in small leters only.

// Undefined

var sy 
console.log(sy)

var m = 'Null'
console.log(m)

var True =null
console.log(True)   

var a = "string"
var b = 1
var c = true
var d
var e = null
var f = 999n

console.log(a, typeof(a))
console.log(b, typeof(b))
console.log(c, typeof(c))
console.log(d, typeof(d))
console.log(e, typeof(e))
console.log(f, typeof(f))


//Reference data types
//Object 
//Array
//Functions
//E.s-6-2015 (set, weakset, map, weakmap)
//Date
//Rergular Expressions

//object

var obj = {name:"sanjaykumar", age:22, city:"hyd", Number:77777777777, role:"associate software engineer"}
console.log(obj)

//arrays

var arr = [1,2,3,4,"hello","hai",true,false,null,[123,987,567]]
console.log(arr)



//divisible by 3 and 5

function mat (m){
    if(m%3==0 && m%5==0)
        console.log("divisible by 3 and 5")
    else{
        console.log("not divisible")
    }
}

mat (15)

//x greater than y by using function.

function great(x,y){
    if(x<y){
        console.log("x greater than y")
    }
    else{
        console.log("y greater than x")
    }
}

great(45,98)
great (87,67)


//reverse string

let line=""
function reverse(r){
    for (let i=r.length-1; i>=0; i--){

        line += r[i]
    }
    console.log(line)

}

reverse("sanjay")

function table (t){
    for(let i = 0; i<=10; i++ )
        console.log(t+ 'x'+i +"="+ (t*i))
}
table(7)

function table1 (u){

    for(let i=0; i<=20; i++)
        console.log(u+ 'x' +i +"="+ (u*i))
}
table1(3)
line1=""
function reverse1(d){

    for(let i =d.length-1;i>=0;i--){

        line1 += d[i]
    }
        console.log(line1)
}
reverse1("naveen")

line2 = ""

function str(e){

    for(let i =e.length-1;i>=0;i--){

        line2 += e[i]
    }
    console.log(line2)
}
str("sirisha")

function table2 (n){
    for(let i=0; i<=10; i++){
        console.log(n+ 'x' +i +"="+ (n*i))
    }
}
table2(5)

line3 =""
function fry(t){
    for(let i=t.length-1;i>=0;i--){
        line3 +=t[i]
    }

    console.log(line3)
}
fry("keerthi")

//sum of an array
let sum = 0

function men(arr){
    for (i=0; i<=arr.length-1;i++){
        sum += arr[i]
    }
    console.log(sum)
}
men  ([100,200,300,400,500])

let sum1 = 0

function cry(arr1){

    for(let i=0; i<=arr1.length-1;i++){

        sum1 += arr1[i]
    }
    console.log(sum1)

}

cry([10,20,30,40,50])

function table4(o){
    for(let i = 1; i<=10; i++){
        console.log(o+ "x" +i +"="+ (o*i))
    }
}
table4(11)

line5=""
function wmen(q){

    for(let i=q.length-1; i>=0; i--){

        line5+=q[i]
    }
    console.log(line5)
}

wmen("poojitha")

let sum3 = 0

function hen(h){

for(let i=0; i<=h.length-1;i++){

    sum3 += h[i]
}
console.log(sum3)
}

hen([23,77,43,54,65])


let sum4 = 0 
function june(k){

    for (let i =0; i<=k.length-1; i++){

        sum4 += k[i]
    }
    console.log(sum4)
}

june([12,34,56,45,6,787,98])

let max = 0
function maximum(array){

    for (let i = 0; i<=array.length-1;i++){
        if (array[i]>max){
            max = array[i]
        }
    }
    
    return max
}

console.log(maximum([10,20,30,40,50]))

let max1 = 0 

function mom (v){

    for (let i=0; i<=v.length-1;i++){

        if(v[i]>max1){
            max1 = v[i]
        }

    }
    return max1
}

console.log(mom([3,3,3,9,8,7,6,5]))

let max2 = 0

function tree(z){

    for(let i=0; i<=z.length-1;i++){

        if(z[i]>max2){
            max2=z[i]
        }
    }
    return max2
}

console.log(tree([67,98,87,23,45,6,999]))

//table//greater//divisible by both numbers
//sum of array or maximum array
//reverse string // vowels & constants

//vowels & consonan ts

let count = 0

function vowels(s){

    for (let i = 0; i<=s.length-1;i++){
        if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
            count++
    }
    }
    console.log(count)
}

vowels("manikanta naidu")

let count1 = 0

function consonants (r){

    for (i=0;i<=r.length-1;i++){

        if (r[i]=='a' || r[i]=='e' || r[i]=='i' || r[i]=='o' || r[i]=='u' ){

            count1++
        }
    }

    console.log(r.length-count1)
        
}

consonants("venkatesh")

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