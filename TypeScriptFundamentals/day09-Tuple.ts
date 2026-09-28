/**
 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type.
 * It helps in storing multiple fields of different data types together.
 */


// Example 1: tuple with 2 values of string, number
/*
let person: [string, number] = ["John", 101];

console.log(person[0]);   // John
console.log(person[1]);   // 101

console.log(person);      // [ 'John', 101 ]
*/


// Example 2: Tuple with multiple values

let user: [number, string, boolean, number, string] = [10, "John", true, 101, "welcome"];
console.log(user);   // [ 10, 'John', true, 101, 'welcome' ]


// Example 3: Iterating over a tuple using a traditional for loop
console.log("using traditional for loop.....");
for (let i = 0; i < user.length; i++)
{
    console.log(user[i]);
}


// Example 4: Iterating using a 'for...in' loop (index-based iteration)

console.log("using for..in loop.......");
for (let i in user)
{
    console.log(user[i]);
}


// Example 5: Iterating using a 'for...of' loop (value-based iteration)

console.log("using for..of loop...");

for (let value of user)
{
    console.log(value);
}


// Example 6: Tuple Array (Array of Tuples)

let students: [number, string][] = [[101, "John"], [102, "Peter"], [103, "Scott"]];

console.log(students.length);   // 3

console.log(students[0]);       // [ 101, 'John' ]

let tp = students[0];

console.log(tp[0]);   // 101
console.log(tp[1]);   // John
