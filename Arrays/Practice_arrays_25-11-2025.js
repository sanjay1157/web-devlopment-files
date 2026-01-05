//Arrays 
// Collection of data (Collection of homogenous and hetrogenous data)
// To represent an array we use []

//example of an array

//[1,2,3,hello,"hi",true,null,undefined,{name : "sunny tony"},[1,2,3,4,5,6,[1,2,3,]]]

//multidimensional array // an array which is present in another array

// what is the need of an array?

//var let and const are use to store the data

var arr = [1,9,7]
console.log(arr)

// addindg an element to an array
//to add an element to array we use push keyword.
//push add the elements a end of an array
//unshift used to add the elements at beggining of an array

arr.push(5)
console.log(arr)

function hey (){
    arr.push(6)
}
hey()
console.log(arr)

//unshift

arr.unshift(88)
console.log(arr)

//splice // we can add at any place in the array
//splice(indexvalue,deleteaccount,new)

arr.splice(2,0,"hello")
console.log(arr)

arr.splice(4,1,"sunny")
console.log(arr)

//how to access a single item in array items
//with the help of index values
//it starts from 0 and ends at n-1 // n--> length of the array

//remove element from the array

//pop
// by using pop we can remove last element in array.

arr.pop ()
console.log(arr)

//shift
//by using shift we can remove first element in array.

arr.shift()
console.log(arr)

//splice

arr.splice(4,1)
console.log(arr)

var output = arr.length
console.log(output)

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