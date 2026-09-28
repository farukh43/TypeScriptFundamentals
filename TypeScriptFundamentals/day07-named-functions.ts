// Session 7: Named Functions
// A named function is declared with a name and can be called many times.
// Run: tsx day07-named-functions.ts
// Each example is wrapped in { } so function names can be reused.

/* Syntax
function functionName(parameter: type): returnType {
  // block of code
}
functionName();   // calling (invoking) the function
*/

// Example 1: no parameters and no return value (void)
{
  function display(): void {
    console.log("Welcome to typescript");
  }
  display();                                   // Welcome to typescript
}

// Example 2: parameters and a return type
{
  function addNumbers(x: number, y: number): number {
    return x + y;
  }
  let res: number = addNumbers(2, 3);          // store the returned value
  console.log(res);                            // 5
  console.log(addNumbers(2, 3));               // 5
  // console.log(addNumbers(1, 2, 3));  // Compiler error: Expected 2 arguments, but got 3.
  // console.log(addNumbers(1));        // Compiler error: Expected 2 arguments, but got 1.
}

// Example 3: rest parameters (...) accept any number of values as an array
{
  function addNumbers(...nums: number[]): void {
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
  }
  addNumbers(1, 2);                            // sum of the numbers 3
  addNumbers(1, 2, 3);                         // sum of the numbers 6
  addNumbers(10, 20, 30, 40, 50);              // sum of the numbers 150
}

// Example 4: rest parameters with multiple types (union type number | string)
{
  function findElements(...elements: (number | string)[]): number {
    return elements.length;
  }
  console.log(findElements(3, "john", 2, 1, "scott"));      // 5
  console.log(findElements(10, 20, 30, 40, 50, 60, 70));    // 7
  console.log(findElements("abc", "xyz"));                  // 2
}

// Example 5: optional parameter (?) can be skipped; it is undefined when not passed
{
  function displayDetails(id: number, name: string, mailId?: string): void {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mailId !== undefined) {
      console.log("Email:", mailId);
    }
  }
  displayDetails(123, "Scott", "scot@gmail.com");  // ID, Name and Email
  displayDetails(123, "Scott");                    // ID and Name only
}

// Example 6: default parameter is used when no value is passed
{
  function calculateDiscount(price: number, rate: number = 0.50): void {
    let discount: number = price * rate;
    console.log("Discount Amount:", discount);
  }
  calculateDiscount(1000, 0.30);               // Discount Amount: 300
  calculateDiscount(1000);                     // Discount Amount: 500 (uses 0.50)
}
