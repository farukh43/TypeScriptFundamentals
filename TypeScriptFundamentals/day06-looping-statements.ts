// Session 6: Looping Statements (while, do-while, for, break, continue)
// Run: tsx day06-looping-statements.ts

// 1. while loop: checks the condition before each run
console.log("--- while ---");
let i: number = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 2. do-while loop: runs at least once, checks the condition after
console.log("--- do-while ---");
let j: number = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// 3. for loop: initialization; condition; increment in one line
console.log("--- for ---");
for (let k: number = 1; k <= 5; k++) {
  console.log(k);
}

// 4. break: stops the loop immediately
console.log("--- break ---");
for (let n: number = 1; n <= 10; n++) {
  if (n === 5) {
    break; // exits the loop when n is 5
  }
  console.log(n);
}

// 5. continue: skips the current iteration
console.log("--- continue ---");
for (let m: number = 1; m <= 5; m++) {
  if (m === 3) {
    continue; // skips when m is 3
  }
  console.log(m);
}

// 6. while vs do-while when the condition is false from the start
console.log("--- while vs do-while ---");
let x: number = 5;
while (x < 5) {
  console.log("Inside while loop"); // never runs: 5 < 5 is false
}
do {
  console.log("Inside do-while loop"); // runs once before the check
} while (x < 5);
