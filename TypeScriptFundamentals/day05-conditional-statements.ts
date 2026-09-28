// Session 5: Conditional Statements (Class Demos)
// Run: tsx day05-conditional-statements.ts

// Example 1: Voting eligibility
{
  let age: number = 20;
  if (age >= 18) {
    console.log("You are eligible for vote");
  }
}

// Example 2: Even or odd number
{
  let num: number = 10;
  if (num % 2 === 0) {
    console.log(`${num} Even number`);
  } else {
    console.log(`${num} Odd number`);
  }
}

// Example 3: Grade based on marks
{
  let marks: number = 50;
  if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
  } else if (marks >= 75 && marks < 90) {
    console.log("Grade B");
  } else if (marks >= 60 && marks < 75) {
    console.log("Grade C");
  } else {
    console.log("Grade D");
  }
}

// Example 4: Browser selection
{
  let browser: string = "chrome";
  if (browser === "chrome") {
    console.log("Browser is chrome");
  } else if (browser === "firefox") {
    console.log("Browser is firefox");
  } else if (browser === "safari") {
    console.log("Browser is safari");
  } else {
    console.log("Other browser");
  }
}

// Example 5: Day of the week
{
  let day: number = 3;
  switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid week");
  }
}

// Example 6: Switch with an expression
{
  let x: number = 20, y: number = 5;
  switch (x - y) {
    case 0: console.log("Result Zero"); break;
    case 5: console.log("Result is Five"); break;
    case 10: console.log("Result is Ten"); break;
    default: console.log("Result is something else");
  }
}
