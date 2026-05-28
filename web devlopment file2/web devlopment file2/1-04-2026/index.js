 // Select elements
    let btn = document.getElementById("btn");
    let input = document.getElementById("inputBox");
    let output = document.getElementById("output");

    // Click event
    btn.addEventListener("click", function() {
      output.textContent = "Button was clicked!";
    });

    // Mouse over event
    btn.addEventListener("mouseover", function() {
      output.textContent = "Mouse is over the button!";
    });

    // Mouse out event
    btn.addEventListener("mouseout", function() {
      output.textContent = "Mouse left the button!";
    });

    // Keyboard event
    input.addEventListener("keyup", function() {
      output.textContent = "You typed: " + input.value;
    });

    //event listeners
    // Select elements
let btn1 = document.getElementById("btn");
let output1 = document.getElementById("output");

// Click event
btn.addEventListener("click", function() {
  output.textContent = "Button was clicked!";
});

// Mouse over event
btn.addEventListener("mouseover", function() {
  output.textContent = "Mouse is over the button!";
});

// Mouse out event
btn.addEventListener("mouseout", function() {
  output.textContent = "Mouse left the button!";
});