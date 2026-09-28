// Session 6: Looping Statements (Lab Assignments)
// Run: tsx day06-looping-statements-assignments.ts
// Each assignment is wrapped in its own { } block so variable names can be reused.

// ========== While loop ==========

// 1. Calculate the sum of the first 10 natural numbers
{
  let i: number = 1;
  let sum: number = 0;
  while (i <= 10) {
    sum += i;
    i++;
  }
  console.log(`Sum of first 10 natural numbers: ${sum}`);
}

// 2. Calculate the factorial of a given number
{
  let num: number = 5;
  let fact: number = 1;
  let i: number = 1;
  while (i <= num) {
    fact *= i;
    i++;
  }
  console.log(`Factorial of ${num}: ${fact}`);
}

// 3. Reverse a given number
{
  let num: number = 12345;
  let temp: number = num;
  let reversed: number = 0;
  while (temp > 0) {
    let digit: number = temp % 10;         // last digit
    reversed = reversed * 10 + digit;      // append it
    temp = Math.floor(temp / 10);          // drop last digit
  }
  console.log(`Reverse of ${num}: ${reversed}`);
}

// 4. Check if a given number is a prime number
{
  let num: number = 29;
  let isPrime: boolean = num > 1;
  let i: number = 2;
  while (i * i <= num) {                   // checking up to the square root is enough
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  console.log(isPrime ? `${num} is a prime number` : `${num} is not a prime number`);
}

// 5. Find the largest digit in a given number
{
  let num: number = 48273;
  let temp: number = num;
  let largest: number = 0;
  while (temp > 0) {
    let digit: number = temp % 10;
    if (digit > largest) {
      largest = digit;
    }
    temp = Math.floor(temp / 10);
  }
  console.log(`Largest digit in ${num}: ${largest}`);
}

// 6. Check if a given number is a palindrome
{
  let num: number = 12321;
  let temp: number = num;
  let reversed: number = 0;
  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  if (num === reversed) {
    console.log(`${num} is a palindrome`);
  } else {
    console.log(`${num} is not a palindrome`);
  }
}

// ========== Do-while loop ==========

// 7. Print numbers from 1 to 10
{
  let i: number = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}

// 8. Arithmetic operations until the user chooses to exit
{
  // Simulated user input: each entry is one menu choice; "exit" ends the loop
  let choices: string[] = ["+", "-", "*", "/", "exit"];
  let a: number = 20, b: number = 4;
  let index: number = 0;
  let choice: string;
  do {
    choice = choices[index];
    switch (choice) {
      case "+": console.log(`${a} + ${b} = ${a + b}`); break;
      case "-": console.log(`${a} - ${b} = ${a - b}`); break;
      case "*": console.log(`${a} * ${b} = ${a * b}`); break;
      case "/":
        if (b !== 0) console.log(`${a} / ${b} = ${a / b}`);
        else console.log("Cannot divide by zero");
        break;
      case "exit": console.log("Exiting calculator"); break;
      default: console.log("Invalid choice");
    }
    index++;
  } while (choice !== "exit");
}

// ========== For loop ==========

// 9. Print multiples of 5 from 5 to 50
{
  for (let i: number = 5; i <= 50; i += 5) {
    console.log(i);
  }
}

// 10. Print prime numbers between 1 and 50
{
  for (let num: number = 2; num <= 50; num++) {
    let isPrime: boolean = true;
    for (let i: number = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}

// 11. Print sum of even numbers between 1 and 20
{
  let sum: number = 0;
  for (let i: number = 2; i <= 20; i += 2) {
    sum += i;
  }
  console.log(`Sum of even numbers (1 to 20): ${sum}`);
}

// 12. Print sum of odd numbers between 1 and 20
{
  let sum: number = 0;
  for (let i: number = 1; i <= 20; i += 2) {
    sum += i;
  }
  console.log(`Sum of odd numbers (1 to 20): ${sum}`);
}

// 13. Print table of 7
{
  for (let i: number = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}

// 14. Print numbers divisible by 3 and 5 from 1 to 100
{
  for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}

// 15. Count number of digits in a number
{
  let num: number = 987654;
  let count: number = 0;
  for (let temp: number = num; temp > 0; temp = Math.floor(temp / 10)) {
    count++;
  }
  console.log(`Number of digits in ${num}: ${count}`);
}

// 16. Find sum of digits in a number
{
  let num: number = 1234;
  let sum: number = 0;
  for (let temp: number = num; temp > 0; temp = Math.floor(temp / 10)) {
    sum += temp % 10;
  }
  console.log(`Sum of digits in ${num}: ${sum}`);
}

// 17. Print multiples of 7 between 1 and 100
{
  for (let i: number = 7; i <= 100; i += 7) {
    console.log(i);
  }
}

// 18. Calculate the sum of all even numbers from 1 to N
{
  let n: number = 10;
  let sum: number = 0;
  for (let i: number = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(`Sum of even numbers from 1 to ${n}: ${sum}`);
}

// ========== Continue ==========

// 19. Print odd numbers from 1 to 20 (for loop, continue skips even numbers)
{
  for (let i: number = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
}

// 20. Print numbers from 1 to 30, skip multiples of 5 (while loop, continue)
{
  let i: number = 0;
  while (i < 30) {
    i++;                     // increment BEFORE continue, or the loop never ends
    if (i % 5 === 0) {
      continue;
    }
    console.log(i);
  }
}

// ========== Break ==========

// 21. Find and print the first even number between 1 and 10 (for loop, break)
{
  for (let i: number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`First even number: ${i}`);
      break;
    }
  }
}

// 22. Print numbers from 1 to 30, stop when a number is greater than 15 (for loop, break)
{
  for (let i: number = 1; i <= 30; i++) {
    if (i > 15) {
      break;
    }
    console.log(i);
  }
}
