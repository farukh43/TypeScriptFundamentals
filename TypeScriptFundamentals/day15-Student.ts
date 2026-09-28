/*
1. Class
2. Read only Properties
3. Optional property
4. Static properties and methods
   1) static properties/methods are common/shared across all the objects
   2) static properties/methods can be accessed through the class name directly
   3) static properties/methods can be modified using the class name
   4) we cannot use 'this' for static properties, instead we use the class name
*/


class Student
{
    readonly studentId: number;   // Read-only property (can only be assigned once, inside constructor)
    name: string;                 // Regular property
    email?: string;               // Optional property (can be undefined)
    static schoolName: string = "Greenwood High";   // Static property (shared by all objects)

    // Constructor
    constructor(sid: number, sname: string, email?: string)
    {
        this.studentId = sid;
        this.name = sname;
        this.email = email;   // If you don't pass email then it is undefined
    }

    // Method
    displayInfo(): void {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);

        if (this.email)
        {
            console.log("Email:", this.email);
        }
        else
        {
            console.log("Email is not provided");
        }
        console.log("School Name:", Student.schoolName);   // access static property using Student (class name)
    }

    // Static method
    static changeSchoolName(newName: string): void {
        Student.schoolName = newName;
    }
}


// Usage

let s1 = new Student(101, "John");
let s2 = new Student(102, "Bob", "bob@gmail.com");

// Display student info
s1.displayInfo();
// Student ID: 101
// Student Name: John
// Email is not provided
// School Name: Greenwood High

s2.displayInfo();
// Student ID: 102
// Student Name: Bob
// Email: bob@gmail.com
// School Name: Greenwood High

// Try to modify the studentId of s1 object.
// s1.studentId = 111;   // Error: Cannot assign to 'studentId' because it is a read-only property.


// Change the school name using static method

Student.changeSchoolName("Sunrise Academy");

// Display student info
console.log("Displaying student info after changing school name....");
s1.displayInfo();   // ... School Name: Sunrise Academy
s2.displayInfo();   // ... School Name: Sunrise Academy (changed for ALL objects)
