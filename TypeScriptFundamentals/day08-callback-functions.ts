// Session 8: Callback Functions
// A callback function is a function passed as an argument to another function and executed later.
// Run: tsx day08-callback-functions.ts

export {};   // makes this file a module, so its names do not clash with other .ts files in the folder

// Example 1
// Function that takes a callback function as a parameter
// smg: (message: string) => void  means: smg is a function that takes a string and returns nothing
function greet(name: string, smg: (message: string) => void): void {
  console.log(name);
  smg("Hello");                          // executing the callback function
}

// Callback function
function showMessage(message: string): void {
  console.log(message);
}

// Calling the function by passing the callback function (name only, no parentheses)
greet("John", showMessage);              // John
                                         // Hello

// Example 2
function sum(a: number, b: number, callback: (result: number) => void): void {
  let result = a + b;
  callback(result);
}

// Callback function
function displayResult(result: number): void {
  console.log(result);
}

sum(10, 20, displayResult);              // 30

// Same call with an inline arrow function as the callback
sum(5, 7, (result: number) => console.log("Result is", result));   // Result is 12
