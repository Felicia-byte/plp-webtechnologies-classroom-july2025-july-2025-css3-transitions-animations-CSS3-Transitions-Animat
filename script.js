// ==============================
// Part 2: Functions — Scope, Parameters, Return Values
// ==============================

// Global scope variable
let globalMessage = "This is a global variable.";

// Function demonstrating local vs global scope
function showScopeDemo() {
  let localMessage = "This is a local variable.";
  return `${globalMessage} But inside this function: ${localMessage}`;
}

// Function with parameters and return value
function calculateArea(width, height) {
  return width * height;
}

// Trigger scope demo on page load
document.getElementById("scopeDemo").textContent = showScopeDemo();

// Trigger calculation when button is clicked
document.getElementById("calcBtn").addEventListener("click", () => {
  let result = calculateArea(5, 10);
  document.getElementById("calcResult").textContent = 
    `The area of a 5x10 rectangle is: ${result}`;
});

// ==============================
// Part 3: Combining CSS + JavaScript
// ==============================
const animateBox = document.getElementById("animateBox");
document.getElementById("animateBtn").addEventListener("click", () => {
  // Add class to trigger CSS animation
  animateBox.classList.add("animate");

  // Remove class after animation so it can be triggered again
  setTimeout(() => animateBox.classList.remove("animate"), 1000);
});
