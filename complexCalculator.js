// Filename: complexCalculator.js
// Description: A complex calculator program that performs various mathematical operations

// Use strict mode to ensure cleaner code and avoid common mistakes
"use strict";

// Basic arithmetic operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Advanced mathematical operations
function power(a, b) {
  return Math.pow(a, b);
}

function squareRoot(a) {
  return Math.sqrt(a);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Trigonometric functions
function sine(angle) {
  return Math.sin(angle);
}

function cosine(angle) {
  return Math.cos(angle);
}

function tangent(angle) {
  return Math.tan(angle);
}

// Logging function for result
function logResult(result) {
  console.log("The result is: " + result);
}

// Usage examples

// Perform complex calculations
let x = 5;
let y = 2;

let addResult = add(x, y);
logResult(addResult);

let subtractResult = subtract(x, y);
logResult(subtractResult);

let multiplyResult = multiply(x, y);
logResult(multiplyResult);

let divideResult = divide(x, y);
logResult(divideResult);

let powerResult = power(x, y);
logResult(powerResult);

let squareRootResult = squareRoot(x);
logResult(squareRootResult);

let factorialResult = factorial(x);
logResult(factorialResult);

let sineResult = sine(x);
logResult(sineResult);

let cosineResult = cosine(x);
logResult(cosineResult);

let tangentResult = tangent(x);
logResult(tangentResult);

// Perform more calculations ...
// ...

// Continue adding more custom functions and operations as needed

// End of complexCalculator.js