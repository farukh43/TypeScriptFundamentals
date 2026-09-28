// Method Overloading and Constructor Overloading in TypeScript

class Calculator
{
    // Constructor overloading
    constructor();                         // default constructor (signature)
    constructor(a: number, b: number);     // parameterized constructor (signature)

    // Implementation (only ONE body, must handle all signatures)
    constructor(a?: number, b?: number)
    {
        if (a !== undefined && b !== undefined)
        {
            console.log("Sum of a & b: ", (a + b));
        }
        else {
            console.log("Default constructor called...");
        }
    }

    // Method overloading

    add(a: number, b: number): number;             // signature 1
    add(a: number, b: number, c: number): number;  // signature 2

    // Implementation
    add(a: number, b: number, c?: number): number
    {
        if (c !== undefined)
        {
            return a + b + c;
        }
        return a + b;
    }
}


// Usage

// Constructor overloading
let calc1 = new Calculator();         // Default constructor called...
let calc2 = new Calculator(10, 20);   // Sum of a & b:  30

// Method overloading
console.log("Adding 2 numbers from calc1:", calc1.add(10, 20));       // 30
console.log("Adding 3 numbers from calc1:", calc1.add(10, 20, 30));   // 60

console.log("Adding 2 numbers from calc2:", calc2.add(10, 20));       // 30
console.log("Adding 3 numbers from calc2:", calc2.add(10, 20, 30));   // 60

// new Calculator(10);   // Error: no overload expects 1 argument
