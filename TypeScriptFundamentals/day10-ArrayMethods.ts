let numbers: number[] = [1, 2, 3, 4, 5];
let fruites: string[] = ["apple", "banana", "orange", "mango"];

console.log("Numbers array:", numbers);   // [ 1, 2, 3, 4, 5 ]
console.log("Fruites array:", fruites);   // [ 'apple', 'banana', 'orange', 'mango' ]

// length - attribute (Not a method)

console.log("Size of numbers array:", numbers.length);   // 5
console.log("Size of fruites array:", fruites.length);   // 4


// 1. push() - Adds single/multiple elements to the end of an array
// Syntax: array.push(element1, ..., elementN)

numbers.push(6, 7);
console.log("After push():", numbers);   // [ 1, 2, 3, 4, 5, 6, 7 ]


// 2. pop() - Removes the last element from an array
// Syntax: array.pop()

let lastFruite = fruites.pop();
console.log("After pop():", fruites);         // [ 'apple', 'banana', 'orange' ]
console.log("Removed Fruite is:", lastFruite);   // mango


// 3. shift() - Removes the first element from an array
// Syntax: array.shift()

let firstNumber = numbers.shift();

console.log("After shift()", numbers);        // [ 2, 3, 4, 5, 6, 7 ]
console.log("Removed Number:", firstNumber);  // 1


// 4. unshift() - Adds single/multiple elements to the beginning of an array
// Syntax: array.unshift(element1, ..., elementN)

fruites.unshift("kiwi", "pear");
console.log("After unshift():", fruites);   // [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]


// 5. concat() - Combines two or more arrays
// Syntax: array.concat(array1, ..., arrayN)

let combinedArray = numbers.concat([8, 9], [10]);

console.log("Concatenated array:", combinedArray);   // [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// 6. slice() - Extracts a section of an array
// Starting Index starts from Zero
// Ending Index will be exclusive. Ex: If 3 is Ending Index it will consider 2 (3-1=2)
// Syntax: array.slice(start, end)

// let extractedArray = fruites.slice(1, 3);
// console.log("After Slice():", extractedArray);   // [ 'pear', 'apple' ]

let extractedArray = fruites.slice(2, 5);
console.log("After Slice():", extractedArray);   // [ 'apple', 'banana', 'orange' ]


// 7. splice() - Adds/removes elements from an array (from everywhere)
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)

console.log("Current elements in fruites array:", fruites);   // [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

// Ex1: only removing

let removedElements = fruites.splice(1, 2);   // 1 is starting index, 2 is how many elements to be removed
console.log("After splice(1,2): ", fruites);             // [ 'kiwi', 'banana', 'orange' ]
console.log("Removed Elements: ", removedElements);      // [ 'pear', 'apple' ]

// Ex2: not removed but added

fruites.splice(1, 0, 'pineapple', 'grape');
console.log("After splice(1,0,'pineapple','grape'): ", fruites);   // [ 'kiwi', 'pineapple', 'grape', 'banana', 'orange' ]

// Ex3: both remove and add
fruites.splice(1, 2, "mango", "cherry");
console.log("After splice(1,2,'mango','cherry'):", fruites);   // [ 'kiwi', 'mango', 'cherry', 'banana', 'orange' ]


// 8. indexOf() - Finds the index of an element. If element not found then returns -1
// Syntax: array.indexOf(searchElement)  (or)  array.indexOf(searchElement, startingIndex)

// Ex1
let bananaIndex = fruites.indexOf("banana");
console.log("Index of banana:", bananaIndex);   // 3

// Ex2
let papayaIndex = fruites.indexOf("papaya");
console.log("Index of Papaya:", papayaIndex);   // -1

// Ex3
bananaIndex = fruites.indexOf("banana", 2);
console.log("Index of banana:", bananaIndex);   // 3


// 9. includes() - Checks if an element exists
// Returns true or false
// Syntax: array.includes(searchElement, fromIndex)

let isAppleExist = fruites.includes('apple');
console.log("Does fruites include apple?", isAppleExist);   // false (apple was removed by splice)

let isBananaExist = fruites.includes('banana');
console.log("Does fruites include banana?", isBananaExist);   // true


// 10. toString() - Converts array to string
// Syntax: array.toString()

console.log(numbers);   // [ 2, 3, 4, 5, 6, 7 ]

let numbersString = numbers.toString();
console.log("Converted Array To String: ", numbersString);   // 2,3,4,5,6,7


// 11. join() - Converts array to string using a custom separator
// Syntax: array.join(separator)

let myarray: string[] = ['w', 'e', 'l', 'c', 'o', 'm', 'e'];
console.log("Original myarray: ", myarray);   // [ 'w', 'e', 'l', 'c', 'o', 'm', 'e' ]

let convertedString = myarray.join(" ");
console.log("converted string: ", convertedString);   // w e l c o m e
