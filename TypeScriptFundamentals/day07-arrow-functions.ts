// Session 7: Arrow Functions (Lambda Functions)
// Lambda is a short way to write an anonymous function; also called arrow functions.
// 3 parts: 1) parameters (optional)  2) fat arrow => ("goes to" operator)  3) statements
// Run: tsx day07-arrow-functions.ts
// Each example is wrapped in { } so names can be reused.

/* Syntax
let variable = (parameters): returnType => {
  // block of code
};
variable();
*/

// Example 1: no parameters and no return value
{
  let greet = (): void => {
    console.log("Hello TypeScript");
  };
  greet();                                     // Hello TypeScript
}

// Example 2: parameters and a return type
{
  let add = (a: number, b: number): number => {
    return a + b;
  };
  console.log(add(10, 20));                    // 30
}

// Example 3: implicit return (single expression: no {} and no return)
{
  let add = (a: number, b: number): number => a + b;
  let multiply = (a: number, b: number): number => a * b;
  console.log(add(10, 20));                    // 30
  console.log(multiply(10, 20));               // 200
}

// Example 4: optional parameter
{
  let displayDetails = (id: number, name: string, mailId?: string): void => {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mailId !== undefined) {
      console.log("Email:", mailId);
    }
  };
  displayDetails(123, "Scott", "scot@gmail.com");
  displayDetails(123, "Scott");
}

// Example 5: default parameter
{
  let calculateDiscount = (price: number, rate: number = 0.50): void => {
    let discount: number = price * rate;
    console.log("Discount Amount:", discount);
  };
  calculateDiscount(1000, 0.30);               // Discount Amount: 300
  calculateDiscount(1000);                     // Discount Amount: 500
}

// Example 6: rest parameters
{
  let findElements = (...elements: (number | string)[]): number => {
    return elements.length;
  };
  console.log(findElements(3, "john", 2, 1, "scott"));      // 5
  console.log(findElements(10, 20, 30, 40, 50, 60, 70));    // 7
  console.log(findElements("abc", "xyz"));                  // 2
}
