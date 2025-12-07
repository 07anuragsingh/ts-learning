"use strict";
// TYPE ANNOTATION
Object.defineProperty(exports, "__esModule", { value: true });
let name = "anurag";
let age = 45;
let isAdmin = false;
// Function Annotation
function add(a, b) {
    return a + b;
}
// Object Annotation:
let user = {
    name: "Anurag",
    age: 53
};
// Array Annotation:
let numbers = [13, 45, 54];
let names = ["Anurag", "Anjali", "Alok"];
console.log(name, age, isAdmin, user);
// TYPE ANNOTATION
let count = 6;
let name2 = "Anurag Kumar";
let isOnline = false;
// Function Inference:
function add2(a, b) {
    return a + b; // inferred return type: number
}
// Array Inference:
let fruits = ["Anjali", "mango"];
// Object Inference:
let person = {
    name: "Anurag",
    age: 20
    // name → string, age → number
};
console.log(count, name2, isOnline, person);
//# sourceMappingURL=typeAnnotaionAndInference.js.map