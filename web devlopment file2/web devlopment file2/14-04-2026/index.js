//event bubbling
//event capturing
//deligation

//event bubbling
//it triggers from child node to parent node. 

//event capturing
//it triggers from parent node to chile node.

let a = document.getElementById("inner")
console.log(a)

function action (){
    console.log("inner h1 clicked")
}

a.addEventListener("click" , action)

let b = document.getElementById("outer")
console.log(b)

function action2 () {
    console.log("child outer h2 clicked")
}

b.addEventListener("click" , action2)

let c = document.getElementById("fort")
console.log(c)

function action3(){
    console.log("parent node of h2 outerclicked")
}

c.addEventListener("click" , action3 , true)

let d = document.getElementById("fest")
console.log(d)

function action4 (){
    console.log ("parent node of h1 inner clicked")
}

d.addEventListener("click" , action4 , true)  


//event deligations

// event will be added to the parent element and the event will be used by all the child elements

let e = document.getElementById("list")

function action4(){

    console.log("button clicked")
}

e.addEventListener("click" , function (f){

    console.log(f.target.innerText)

})

