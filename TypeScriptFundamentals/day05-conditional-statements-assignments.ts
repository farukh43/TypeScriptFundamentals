// Session 5: Conditional Statements (Lab Assignments)
// Run: tsx day05-conditional-statements-assignments.ts
// Each assignment is wrapped in its own { } block so variable names can be reused.

// ========== If condition ==========

// 1. Check if a character is uppercase
{
  let ch: string = "P";
  if (ch >= "A" && ch <= "Z") {
    console.log(`1) ${ch} is an uppercase character`);
  }
}

// 2. Check if a number is a multiple of 10
{
  let num: number = 50;
  if (num % 10 === 0) {
    console.log(`2) ${num} is a multiple of 10`);
  }
}

// ========== If else condition ==========

// 3. Check if a person is a teenager (age between 13 and 19)
{
  let age: number = 16;
  if (age >= 13 && age <= 19) {
    console.log(`3) Age ${age}: Teenager`);
  } else {
    console.log(`3) Age ${age}: Not a teenager`);
  }
}

// 4. Compare two numbers and print the larger one
{
  let a: number = 25, b: number = 40;
  if (a > b) {
    console.log(`4) Larger number is ${a}`);
  } else {
    console.log(`4) Larger number is ${b}`);
  }
}

// 5. Check if a number is positive, negative, or zero
{
  let num: number = -7;
  if (num > 0) {
    console.log(`5) ${num} is positive`);
  } else if (num < 0) {
    console.log(`5) ${num} is negative`);
  } else {
    console.log(`5) ${num} is zero`);
  }
}

// 6. Check if a person is eligible for a senior citizen discount (age >= 60)
{
  let age: number = 65;
  if (age >= 60) {
    console.log(`6) Age ${age}: Eligible for senior citizen discount`);
  } else {
    console.log(`6) Age ${age}: Not eligible for senior citizen discount`);
  }
}

// ========== Nested if else ==========

// 7. Check if a number is positive and even
{
  let num: number = 12;
  if (num > 0) {
    if (num % 2 === 0) {
      console.log(`7) ${num} is positive and even`);
    } else {
      console.log(`7) ${num} is positive but odd`);
    }
  } else {
    console.log(`7) ${num} is not positive`);
  }
}

// 8. Check if a character is an uppercase vowel
{
  let ch: string = "E";
  if (ch >= "A" && ch <= "Z") {
    if (ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U") {
      console.log(`8) ${ch} is an uppercase vowel`);
    } else {
      console.log(`8) ${ch} is uppercase but not a vowel`);
    }
  } else {
    console.log(`8) ${ch} is not an uppercase letter`);
  }
}

// 9. Find the largest of three numbers
{
  let a: number = 15, b: number = 42, c: number = 30;
  if (a >= b && a >= c) {
    console.log(`9) Largest number is ${a}`);
  } else if (b >= a && b >= c) {
    console.log(`9) Largest number is ${b}`);
  } else {
    console.log(`9) Largest number is ${c}`);
  }
}

// 10. Check if a number is a multiple of both 5 and 10
{
  let num: number = 40;
  if (num % 5 === 0) {
    if (num % 10 === 0) {
      console.log(`10) ${num} is a multiple of both 5 and 10`);
    } else {
      console.log(`10) ${num} is a multiple of 5 only`);
    }
  } else {
    console.log(`10) ${num} is not a multiple of 5`);
  }
}

// 11. Check if a character is a vowel or consonant
{
  let ch: string = "k";
  let lower: string = ch.toLowerCase(); // handles both cases
  if (lower >= "a" && lower <= "z") {
    if (lower === "a" || lower === "e" || lower === "i" || lower === "o" || lower === "u") {
      console.log(`11) ${ch} is a vowel`);
    } else {
      console.log(`11) ${ch} is a consonant`);
    }
  } else {
    console.log(`11) ${ch} is not an alphabet`);
  }
}

// 12. Check if a number is divisible by both 2 and 3
{
  let num: number = 18;
  if (num % 2 === 0) {
    if (num % 3 === 0) {
      console.log(`12) ${num} is divisible by both 2 and 3`);
    } else {
      console.log(`12) ${num} is divisible by 2 only`);
    }
  } else {
    console.log(`12) ${num} is not divisible by 2`);
  }
}

// ========== Switch case ==========

// 13. Print the corresponding month name for a given month number
{
  let month: number = 9;
  switch (month) {
    case 1: console.log("13) January"); break;
    case 2: console.log("13) February"); break;
    case 3: console.log("13) March"); break;
    case 4: console.log("13) April"); break;
    case 5: console.log("13) May"); break;
    case 6: console.log("13) June"); break;
    case 7: console.log("13) July"); break;
    case 8: console.log("13) August"); break;
    case 9: console.log("13) September"); break;
    case 10: console.log("13) October"); break;
    case 11: console.log("13) November"); break;
    case 12: console.log("13) December"); break;
    default: console.log("13) Invalid month number");
  }
}

// 14. Perform basic arithmetic operations based on user input
{
  let a: number = 20, b: number = 4;
  let operator: string = "*"; // change to +, -, *, /
  switch (operator) {
    case "+": console.log(`14) ${a} + ${b} = ${a + b}`); break;
    case "-": console.log(`14) ${a} - ${b} = ${a - b}`); break;
    case "*": console.log(`14) ${a} * ${b} = ${a * b}`); break;
    case "/":
      if (b !== 0) {
        console.log(`14) ${a} / ${b} = ${a / b}`);
      } else {
        console.log("14) Cannot divide by zero");
      }
      break;
    default: console.log("14) Invalid operator");
  }
}

// 15. Print the season based on the month number (fall-through: grouped cases)
{
  let month: number = 4;
  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("15) Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("15) Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("15) Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("15) Autumn");
      break;
    default:
      console.log("15) Invalid month number");
  }
}
