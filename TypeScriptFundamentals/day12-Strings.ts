// string - Text value or a combination of characters
/*
1. Single quote - String literal ('SingleQuote')
2. Double quote - String literal ("DoubleQuote")
3. Backtick (``) - String template - `When we try to use a string variable inside another string value ${variable}`

// index in string starts with 0

'' or "" or `` (backtick)
*/

// Declaration of strings

let str1: string = 'This is a string with single quote';
let str2: string = "This is a string with double quote";
let str3: string = `This is a string with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

// When to use back tick ``

let num: number = 10;

console.log("Number is:", num);      // Number is: 10         valid
console.log("Number is: ${num}");    // Number is: ${num}     not valid (printed as plain text)
console.log('Number is: ${num}');    // Number is: ${num}     not valid (printed as plain text)
console.log(`Number is: ${num}`);    // Number is: 10         valid


// String methods

let str: string = "Hello, TypeScript!";

// 1. length - find the length of a string (how many characters)
console.log("Length of a string: ", str.length);   // 18

// 2. toUpperCase() and toLowerCase()
console.log("Upper case: ", str.toUpperCase());   // HELLO, TYPESCRIPT!
console.log("Lower case: ", str.toLowerCase());   // hello, typescript!

// 3. charAt(index) and indexOf(string)
console.log("Character at 4th index:", str.charAt(4));   // o
console.log("Index of Type: ", str.indexOf("Type"));     // 7

// 4. substring(starting index, ending index)
// ending index is exclusive
// "Hello, TypeScript!"
console.log(str.substring(0, 5));   // Hello

// 5. includes(): returns true or false (boolean)
// string value is case sensitive
console.log(str.includes("abc"));          // false
console.log(str.includes("TypeScript"));   // true
console.log(str.includes("!"));            // true
console.log(str.includes("TYPESCRIPT"));   // false

// 6. startsWith() and endsWith() --> returns a boolean value (true/false)
console.log("starts with:", str.startsWith("Hello"));   // true
console.log("ends with:", str.endsWith("!"));           // true
console.log("ends with abc:", str.endsWith("abc"));     // false

// 7. replace()
// "Hello, TypeScript!"
console.log("Replaced string:", str.replace("TypeScript", "World"));   // Hello, World!

// 8. split() - break the string into multiple parts based on the delimiter, returns an array

// Ex1:
let words: string[] = str.split(" ");
console.log("After splitting string:", words);   // [ 'Hello,', 'TypeScript!' ]

// Ex2:
let mystring: string = "abc@gmail.com,xyzabc";

let arr = mystring.split(",");
console.log("email:", arr[0]);      // abc@gmail.com
console.log("password:", arr[1]);   // xyzabc

// 9. trim(), trimStart(), trimEnd()

mystring = "   welcome to typescript   ";

console.log("Original string:", mystring);                // "   welcome to typescript   "
console.log("trim string:", mystring.trim());             // "welcome to typescript"
console.log("trimStart string:", mystring.trimStart());   // "welcome to typescript   "
console.log("trimEnd string:", mystring.trimEnd());       // "   welcome to typescript"

// 10. concat()

str1 = "welcome";
str2 = "to typescript";
str3 = " and javascript";

console.log("After concatenation:", str1.concat(str2));   // welcometo typescript
console.log("After concatenation:", str1 + str2);         // welcometo typescript (alternative)
console.log("welcome".concat("to typescript"));           // welcometo typescript
console.log(str1.concat(str2).concat(str3));              // welcometo typescript and javascript


// Concept of string immutability (immutable - cannot change original)

// num = 10;

let res = num + 5;
console.log(res);   // 15
console.log(num);   // 10

str1 = "welcome";
let modifiedstring = str1.concat("to typescript");
console.log(str1);             // welcome (original not changed)
console.log(modifiedstring);   // welcometo typescript
