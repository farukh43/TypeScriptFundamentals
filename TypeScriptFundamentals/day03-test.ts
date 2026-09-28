// ============================================================
// Session 3: Data Types | Type Safety | Annotations & Type Inference
// Video:  TypeScript for Playwright | Data Types | Type Safety | Annotations & Type Inference (Session 3)
// File:   day02-test.ts
// Topic:  TypeScript is statically typed and type-safe
// Run:    tsx day02-test.ts
// ============================================================
// Note: "node day02-test.ts" fails with "SyntaxError: Unexpected token ':'"
//       because Node cannot read type annotations. Use tsx (or compile with tsc first).

export {}; // makes this file a module, so its variable names do not clash with other files

let data: number = 10;       // number
// data = "Ten";             // Compile time error: Type 'string' is not assignable to type 'number'
console.log(data);

// Type inference: no annotation, TS still knows the types
let num1 = "5";              // inferred as string
let num2 = 3;                // inferred as number
let result = num1 + num2;    // string + number is allowed, result is a string
console.log(result);         // 53

// With annotations (same output, types are now explicit)
let a: string = "5";
let b: number = 3;
console.log(a + b);          // 53

// Type safety: TS blocks assigning the wrong type
// let total: number = a + b; // Error: Type 'string' is not assignable to type 'number'
