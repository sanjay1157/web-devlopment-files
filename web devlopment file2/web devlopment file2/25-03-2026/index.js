//Basic click event

function sayHello() {
  alert("Hello!");
}

//adding event listener
let button = document.getElementById("btn");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});

//Mouse events

let box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  box.style.background = "blue";
});

box.addEventListener("mouseout", () => {
  box.style.background = "red";
});

//keyboard event

let input = document.getElementById("inputBox");

input.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
});

//Event Object

document.getElementById("btn2").addEventListener("click", function(event) {
  console.log(event);
});